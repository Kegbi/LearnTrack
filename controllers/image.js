const path = require("path");
const multer = require("multer");
// const sharp = require("sharp");

const imageStorage = multer.diskStorage({
  destination: path.join(__dirname, "./uploads/images"),
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadImage = multer({
  storage: imageStorage,
  limits: {
    fields: 5,
    fieldNameSize: 50,
    fieldSize: 20000,
    fileSize: 15000000,
  },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: You can download images only!");
  }
}

module.exports = {
  uploadImage,
};
