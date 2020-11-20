const { getLatest } = require("../utils/item");
const { getItemInfo } = require("../utils/item");
const { getItemInteractions } = require("../utils/item");
const { getProfileInteractions } = require("../utils/item");

const getAllBooks = async (req, res, db) => {
  try {
    let resp = await db.select("*").from("books");
    if (resp) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get books");
    }
  } catch {
    res.status(400).json("Error getting books");
  }
};

const getLastBooks = async (req, res, db) => {
  try {
    let resp = await getLatest(db, "books", 7);
    if (resp && Array.isArray(resp) && !resp.length) {
      res.json("Looks like there are no books for now");
    } else if (resp) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get books");
    }
  } catch {
    res.status(400).json("Error getting books");
  }
};

const getLikedBooks = async (req, res, db) => {
  const { id } = req.params;
  try {
    let resp = await getProfileInteractions(db, id, "books", "l");
    if (resp) {
      let response = await getItemInfo(db, resp.bookid, "books");
      if (response) {
        res.json(response);
      }
    } else {
      res.status(400).json("Unable to get liked books");
    }
  } catch {
    res.status(400).json("Error getting liked books");
  }
};

const getBook = async (req, res, db) => {
  const { id } = req.params;
  try {
    const resp = {
      info: await getItemInfo(db, id, "books"),
      likes: await getItemInteractions(db, id, "books", "l"),
      // stored: ,
      // dislikes: ,
    };
    if (resp.info && Array.isArray(resp.info) && resp.info.length) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get book");
    }
  } catch {
    res.status(400).json("Error getting book");
  }
};

const addBook = (req, res, db) => {
  const { name, image, author, info } = req.body;
  if (!name || !author || !info) {
    return res.status(400).json("Incorrect form submission");
  }
  try {
    db.transaction((trx) => {
      trx
        .insert({
          name: name,
          image: image,
          author: author,
          info: info,
          created: new Date(),
        })
        .into("books")
        .returning("bookid")
        .then((bookid) => res.json(bookid))
        .then(trx.commit);
    });
  } catch {
    res.status(400).json("Error adding new book");
  }
};

const deleteBook = async (req, res, db) => {
  const { id } = req.params;
  try {
    await db("books_likes").where({ bookid: id }).del();
    let resp = await db("books").where({ bookid: id }).del();
    if (resp) {
      res.json("Book deleted");
    } else {
      res.status(400).json("Unable to delete book. Maybe it's already deleted");
    }
  } catch {
    res.status(400).json("Error deleting book");
  }
};

const updateBook = async (req, res, db) => {
  const { id } = req.params;
  const { name, image, author, info } = req.body;
  try {
    let resp = await db("books")
      .where({ bookid: id })
      .update({ name: name, image: image, author: author, info: info });
    if (resp) {
      res.json("Book updated");
    } else {
      res.status(400).json("Unable to update book");
    }
  } catch {
    res.status(400).json("Error updating book");
  }
};

module.exports = {
  getAllBooks,
  getLastBooks,
  getLikedBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
};
