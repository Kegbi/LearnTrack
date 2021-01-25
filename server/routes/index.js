const items = require("../controllers/items");
const image = require("../controllers/image");
const knex = require("knex");

const DATABASE_URL = process.env.POSTGRES_URI;

const db = knex({
  client: "pg",
  connection: DATABASE_URL,
});

module.exports = (app) => {
  app.route("/").get((req, res) => {
    res.send("Hey, get out of here!");
  });

  app.post(
    "/api/uploadImage",
    image.uploadImage.single("file"),
    async (req, res) => {
      await image.processImage(req, res);
    }
  );

  app
    .route("/api/books")
    .get((req, res) => items.getAllItems(req, res, db, "books"))
    .post((req, res) => items.addItem(req, res, db, "books"));
  app
    .route("/api/books/latest")
    .get((req, res) => items.getLastItems(req, res, db, "books"));
  app
    .route("/api/books/endless/:index/:quantity")
    .get((req, res) => items.getPortionOfItems(req, res, db, "books"));
  app
    .route("/api/books/:id")
    .get((req, res) => items.getItem(req, res, db, "books"))
    .put((req, res) => items.updateItem(req, res, db, "books"))
    .delete((req, res) => items.deleteItem(req, res, db, "books"));

  app
    .route("/api/courses")
    .get((req, res) => items.getAllItems(req, res, db, "courses"))
    .post((req, res) => items.addItem(req, res, db, "courses"));
  app
    .route("/api/courses/latest")
    .get((req, res) => items.getLastItems(req, res, db, "courses"));
  app
    .route("/api/courses/endless/:index/:quantity")
    .get((req, res) => items.getPortionOfItems(req, res, db, "courses"));
  app
    .route("/api/courses/:id")
    .get((req, res) => items.getItem(req, res, db, "courses"))
    .put((req, res) => items.updateItem(req, res, db, "courses"))
    .delete((req, res) => items.deleteItem(req, res, db, "courses"));
};
