const { getSomeItems } = require("../utils/item");
const { getLikesTableName } = require("../utils/utils");
const { getIdColumnName } = require("../utils/utils");
const { getLatest } = require("../utils/item");
const { getItemInfo } = require("../utils/item");
const { getItemInteractions } = require("../utils/item");
const { getProfileInteractions } = require("../utils/item");

const getAllItems = async (req, res, db, type) => {
  try {
    let resp = await db.select("*").from(type);
    if (resp) {
      res.json(resp);
    } else {
      res.status(400).json(`Unable to get ${type}`);
    }
  } catch {
    res.status(400).json(`Error getting ${type}`);
  }
};

const getLastItems = async (req, res, db, type) => {
  try {
    let resp = await getLatest(db, type, 7);
    if (resp && Array.isArray(resp) && !resp.length) {
      res.json([]);
    } else if (resp) {
      res.json(resp);
    } else {
      res.status(400).json(`Unable to get ${type}`);
    }
  } catch {
    res.status(400).json(`Error getting ${type}`);
  }
};

const getPortionOfItems = async (req, res, db, type) => {
  const id_column = getIdColumnName(type);
  const { index, quantity } = req.params;

  try {
    let resp = await getSomeItems(db, type, id_column, index, quantity);
    if (resp) {
      if (resp.length >= quantity) {
        resp = resp.slice(0, quantity);
        res.json({ success: true, data: resp, moreAvailable: true });
      } else {
        res.json({ success: true, data: resp, moreAvailable: false });
      }
    } else {
      res.status(400).json({ success: false, message: "Unable to get items" });
    }
  } catch {
    res.status(400).json({ success: false, message: "Unable to get items" });
  }
};

const getLikedItems = async (req, res, db, type) => {
  const id_column = getIdColumnName(type);
  const { id } = req.params;
  try {
    let resp = await getProfileInteractions(db, id, type, "l");
    if (resp) {
      let response = await getItemInfo(db, resp[id_column], type);
      if (response) {
        res.json({ success: true, data: response });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: `Unable to get liked ${type}` });
    }
  } catch {
    res
      .status(400)
      .json({ success: false, message: `Error getting liked ${type}` });
  }
};

const getItem = async (req, res, db, type) => {
  let singularType = type === "books" ? "book" : "course";
  const { id } = req.params;
  try {
    const resp = {
      info: await getItemInfo(db, id, type),
      likes: await getItemInteractions(db, id, type, "l"),
      stored: await getItemInteractions(db, id, type, "s"),
      dislikes: await getItemInteractions(db, id, type, "d"),
    };
    if (resp.info && Array.isArray(resp.info) && resp.info.length) {
      res.json({ success: true, data: resp });
    } else {
      res
        .status(400)
        .json({ success: false, message: `Unable to get ${singularType}` });
    }
  } catch {
    res
      .status(400)
      .json({ success: false, message: `Error getting ${singularType}` });
  }
};

const addItem = (req, res, db, type) => {
  const id_column = getIdColumnName(type);
  let singularType = type === "books" ? "book" : "course";
  const { name, image, author, info } = req.body;
  if (!name || !author || !info) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect form submission" });
  }
  try {
    db.transaction((trx) => {
      trx
        .insert({
          name: name,
          image: image,
          type: singularType,
          author: author,
          info: info,
          created: new Date(),
        })
        .into(type)
        .returning(id_column)
        .then((id) => res.json({ success: true, data: id }))
        .then(trx.commit);
    });
  } catch {
    res
      .status(400)
      .json({ success: false, message: `Error adding new ${singularType}` });
  }
};

const deleteItem = async (req, res, db, type) => {
  let singularType = type === "books" ? "book" : "course";
  let table = getLikesTableName(type);
  const id_column = getIdColumnName(type);
  const { id } = req.params;
  try {
    await db(table)
      .where({ [id_column]: id })
      .del();
    let resp = await db(type)
      .where({ [id_column]: id })
      .del();
    if (resp) {
      res.json({ success: true });
    } else {
      res.status(400).json({
        success: false,
        message: `Unable to delete ${singularType}. Maybe it's already deleted`,
      });
    }
  } catch {
    res
      .status(400)
      .json({ success: false, message: `Error deleting ${singularType}` });
  }
};

const updateItem = async (req, res, db, type) => {
  let singularType = type === "books" ? "book" : "course";
  const id_column = getIdColumnName(type);
  const { id } = req.params;
  const { name, image, author, info } = req.body;
  try {
    let resp = await db(type)
      .where({ [id_column]: id })
      .update({ name: name, image: image, author: author, info: info });
    if (resp) {
      res.json({ success: true });
    } else {
      res
        .status(400)
        .json({ success: false, message: `Unable to update ${singularType}` });
    }
  } catch {
    res
      .status(400)
      .json({ success: false, message: `Error updating ${singularType}` });
  }
};

const searchItems = async (req, res, db) => {
  const { query } = req.params;

  const getSearchData = (table) => {
    return db
      .select("*")
      .from(table)
      .where("name", "ILIKE", `%${query}%`)
      .orWhere("author", "ILIKE", `%${query}%`);
  };

  try {
    let respBooks = getSearchData("books");
    let respCourses = getSearchData("courses");

    const result = await Promise.all([respBooks, respCourses]);

    if (result[0] && result[1]) {
      res.json({ success: true, data: [...result[0], ...result[1]] });
    } else {
      res
        .status(400)
        .json({ success: true, message: `Unable to get search results` });
    }
  } catch {
    res
      .status(400)
      .json({ success: true, message: `Error getting search results` });
  }
};

module.exports = {
  getAllItems,
  getLastItems,
  getPortionOfItems,
  getLikedItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
  searchItems,
};
