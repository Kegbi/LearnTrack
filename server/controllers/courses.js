const getAllCourses = (req, res, db) => {
  db.select("*")
    .from("courses")
    .then((resp) => {
      if (resp) {
        res.json(resp);
      } else {
        res.status(400).json("Unable to get courses");
      }
    })
    .catch((err) => res.status(400).json("Error getting courses"));
};

const getLikedCourses = (req, res, db) => {
  const { id } = req.params;
  db.select("courseid")
    .from("courses_likes")
    .where({ userid: id, typeofaction: "like" })
    .then((resp) => {
      if (resp) {
        db.select("*")
          .from("courses")
          .where({ courseid: resp.courseid })
          .then((response) => {
            if (response) {
              res.json(response);
            }
          });
      } else {
        res.status(400).json("Unable to get liked courses");
      }
    })
    .catch((err) => res.status(400).json("Error getting liked courses"));
};

const getCourse = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("courses")
    .where({ courseid: id })
    .then((resp) => {
      if (resp) {
        res.json(resp);
      } else {
        res.status(400).json("Unable to get course");
      }
    })
    .catch((err) => res.status(400).json("Error getting course"));
};

module.exports = {
  getAllCourses,
  getLikedCourses,
  getCourse,
};
