const express = require("express");
const router = express.Router();

const {
  userDataAdd,
  getUserData,
  getUserByID,
} = require("../controller/userController");



//Routes for user data
router.route("/get").get(getUserData);
router.route("/add").post(userDataAdd);
router.route("/get/:id")
    .get(getUserByID)


module.exports = router;