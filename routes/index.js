const multer = require("multer");

const imageStorage = multer.diskStorage({
  destination: "./uploads/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadImage = multer({ storage: imageStorage });

module.exports = (app) => {
  app.route("/").get((req, res) => {
    res.send("It's working!");
  });

  app.post("/uploadImage", uploadImage.single("file"), async (req, res) => {
    if (req.file) {
      res.send({ success: true, filename: req.file.filename });
    } else {
      res.sendStatus(500);
    }
  });

  // app.route("/api/books").get(books.all);
  // app.route("/api/books").post(books.create);
  // app
  //   .route("/api/books/:id")
  //   .get((req, res) => {
  //     res.send("Working, buddy");
  //   })
  //   .put(books.updateBook)
  //   .delete(books.deleteBook);
  //
  // app.route("/api/courses").get(courses.all);
  // app.route("/api/courses").post(courses.create);
  // app
  //   .route("/api/courses/:id")
  //   .get((req, res) => {
  //     res.send("Working, buddy");
  //   })
  //   .put(courses.updateCourse)
  //   .delete(books.deleteCourse);
};
