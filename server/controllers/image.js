const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

const imageStorage = multer.memoryStorage();

const compressedImageFolder = path.join(__dirname, "..", "uploads", "images");

const processImage = async (req, res) => {
  const response = await resizeImage(req);
  if (response.success === true) {
    res.send({ success: response.success, message: response.message });
  } else if (response.success === false && response.message) {
    res.status(500).send(response.message);
  } else {
    res.sendStatus(500);
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

const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};

const resizeImage = (req) => {
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
    sharp(req.file.buffer)
      .resize({ width: 640, height: 480 })
      .jpeg({ quality: 80, chromaSubsampling: "4:4:4" })
      .toFile(compressedImageFilePath, (err) => {
        if (err) {
          return { success: false, message: "Error compressing your image" };
        }
      });
    return { success: true, message: compressedImageFileName };
  } else {
    return { success: false, message: "No file or wrong file format" };
  }
};

module.exports = {
  uploadImage,
  processImage,
};
