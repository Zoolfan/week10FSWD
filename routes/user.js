const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.get("/users", userController.finduser);
router.get("/users/:id", userController.finduserID);
router.post("/users", userController.adduser);
router.put("/users", userController.updateuser);
router.delete("/users/:id", userController.deleteuser);

module.exports = router;
