const getAllBooks = (req, res, db) => {
  db.select("*")
    .from("books")
    .then((resp) => {
      if (resp) {
        res.json(resp);
      } else {
        res.status(400).json("Unable to get books");
      }
    })
    .catch((err) => res.status(400).json("Error getting books"));
};

const getLikedBooks = (req, res, db) => {
  const { id } = req.params;
  db.select("bookid")
    .from("books_likes")
    .where({ userid: id, typeofaction: "like" })
    .then((resp) => {
      if (resp) {
        db.select("*")
          .from("books")
          .where({ bookid: resp.bookid })
          .then((response) => {
            if (response) {
              res.json(response);
            }
          });
      } else {
        res.status(400).json("Unable to get liked books");
      }
    })
    .catch((err) => res.status(400).json("Error getting liked books"));
};

const getBook = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("books")
    .where({ bookid: id })
    .then((resp) => {
      if (resp) {
        res.json(resp);
      } else {
        res.status(400).json("Unable to get book");
      }
    })
    .catch((err) => res.status(400).json("Error getting book"));
};
