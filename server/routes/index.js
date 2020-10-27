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
      await image.processImage(req, res);
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
