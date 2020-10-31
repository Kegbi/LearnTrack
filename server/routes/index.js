const books = require("../controllers/books");
const courses = require("../controllers/courses");
const image = require("../controllers/image");
const knex = require("knex");

const DATABASE_URL = process.env.POSTGRES_URI;

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

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

  app
    .route("/api/books")
    .get((req, res) => books.getAllBooks(req, res, db))
    .post((req, res) => books.addBook(req, res, db));
  app
    .route("/api/books/:id")
    .get((req, res) => books.getBook(req, res, db))
    .put((req, res) => books.updateBook(req, res, db))
    .delete((req, res) => books.deleteBook(req, res, db));

  app
    .route("/api/courses")
    .get((req, res) => courses.getAllCourses(req, res, db))
    .post((req, res) => courses.addCourse(req, res, db));
  app
    .route("/api/courses/:id")
    .get((req, res) => courses.getCourse(req, res, db))
    .put((req, res) => courses.updateCourse(req, res, db))
    .delete((req, res) => courses.deleteCourse(req, res, db));
};
