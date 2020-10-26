const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

const imageStorage = multer.memoryStorage();

const compressedImageFolder = path.join(__dirname, "..", "uploads", "images");

const processImage = async (req) => {
  let compressedImageFileName = `${new Date().getTime()}${Math.floor(
    Math.random() * 1000000000
  )}.jpg`;
  let compressedImageFilePath = path.join(
    compressedImageFolder,
    compressedImageFileName
  );
  if (req.file) {
    fs.access(compressedImageFolder, (err) => {
      if (err) {
        fs.mkdirSync(compressedImageFolder);
      }
    });
    await sharp(req.file.buffer)
      .resize({ width: 640, height: 480 })
      .jpeg({ quality: 80, chromaSubsampling: "4:4:4" })
      .toFile(compressedImageFilePath, (err, file, info) => {
        if (err) {
          return { success: false, message: "Error compressing your image" };
        }
      });
    return { success: true, message: compressedImageFileName };
  } else {
    return { success: false, message: "File not found" };
  }
};

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
  processImage,
};
