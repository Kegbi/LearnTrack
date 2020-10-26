const books = require("../controllers/books");
const courses = require("../controllers/courses");
const image = require("../controllers/image");

module.exports = (app) => {
  app.route("/").get((req, res) => {
    res.send("It's working!");
  });

  app.post(
    "/uploadImage",
    image.uploadImage.single("file"),
    async (req, res) => {
      const response = await image.processImage(req);
      if (response.success === true) {
        res.send({ success: response.success, message: response.message });
      } else if (response.success === false && response.message) {
        res.status(500).send(response.message);
      } else {
        res.sendStatus(500);
      }
    }
  );

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
