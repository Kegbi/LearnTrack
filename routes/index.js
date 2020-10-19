const path = require("path");
const sharp = require("sharp");

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
      if (req.file) {
        let compressedImageFilePath = path.join(
          __dirname,
          "..",
          "public",
          "images",
          new Date().getTime() + ".jpeg"
        );
        await sharp(req.file.path)
          .resize(640, 480)
          .jpeg({
            quality: 80,
            chromaSubsampling: "4:4:4",
          })
          .toFile(compressedImageFilePath, (err, req, info) => {
            if (err) {
              res.send("Some error with compressing your image");
            } else {
              res.send({ success: true, filename: req.file.filename });
            }
          });
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
