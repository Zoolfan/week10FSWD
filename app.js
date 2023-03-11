const express = require("express");
const app = express();
const router = require("./routes/index.js");
const upload = require("./upload.js");
const errorHandler = require("./middlewares/errorhandler.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload);
app.use(router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("siap mencret");
});
