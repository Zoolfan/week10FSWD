const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./upload"));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

router.use("/upload", express.static(path.join(__dirname, "upload")));

router.post("/upload/photo", multer({ storage: diskStorage }).single("photo"), (req, res) => {
  const file = req.file.path;
  if (!file) {
    res.status(400).json({ message: "Upload Failed!!" });
  } else {
    res.status(200).json({ message: "File Uploaded!!" });
  }
});

module.exports = router;
