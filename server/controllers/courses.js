const { getLatest } = require("../utils/item");
const { getItemInfo } = require("../utils/item");
const { getItemInteractions } = require("../utils/item");
const { getProfileInteractions } = require("../utils/item");

const getAllCourses = async (req, res, db) => {
  try {
    let resp = await db.select("*").from("courses");
    if (resp) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get courses");
    }
  } catch {
    res.status(400).json("Error getting courses");
  }
};

const getLastCourses = async (req, res, db) => {
  try {
    let resp = await getLatest(db, "courses", 7);
    if (resp && Array.isArray(resp) && !resp.length) {
      res.json("Looks like there are no courses for now");
    } else if (resp) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get courses");
    }
  } catch {
    res.status(400).json("Error getting courses");
  }
};

const getLikedCourses = async (req, res, db) => {
  const { id } = req.params;
  try {
    let resp = await getProfileInteractions(db, id, "courses", "l");
    if (resp) {
      let response = await getItemInfo(db, resp.courseid, "courses");
      if (response) {
        res.json(response);
      }
    } else {
      res.status(400).json("Unable to get liked courses");
    }
  } catch {
    res.status(400).json("Error getting liked courses");
  }
};

const getCourse = async (req, res, db) => {
  const { id } = req.params;
  try {
    const resp = {
      info: await getItemInfo(db, id, "courses"),
      likes: await getItemInteractions(db, id, "courses", "l"),
      // stored: ,
      // dislikes: ,
    };
    if (resp.info && Array.isArray(resp.info) && resp.info.length) {
      res.json(resp);
    } else {
      res.status(400).json("Unable to get course");
    }
  } catch {
    res.status(400).json("Error getting course");
  }
};

const addCourse = (req, res, db) => {
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
        .into("courses")
        .returning("courseid")
        .then((course) => res.json(course))
        .then(trx.commit);
    });
  } catch {
    res.status(400).json("Error adding new course");
  }
};

const deleteCourse = async (req, res, db) => {
  const { id } = req.params;
  try {
    await db("courses_likes").where({ courseid: id }).del();
    let resp = await db("courses").where({ courseid: id }).del();
    if (resp) {
      res.json("Course deleted");
    } else {
      res
        .status(400)
        .json("Unable to delete course. Maybe it's already deleted");
    }
  } catch {
    res.status(400).json("Error deleting course");
  }
};

const updateCourse = async (req, res, db) => {
  const { id } = req.params;
  const { name, image, author, info } = req.body;
  try {
    let resp = await db("courses")
      .where({ courseid: id })
      .update({ name: name, image: image, author: author, info: info });
    if (resp) {
      res.json("Course updated");
    } else {
      res.status(400).json("Unable to update course");
    }
  } catch {
    res.status(400).json("Error updating course");
  }
};

module.exports = {
  getAllCourses,
  getLastCourses,
  getLikedCourses,
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse,
};
