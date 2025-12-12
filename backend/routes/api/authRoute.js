const authRoute = require("express").Router();

const authController = require("../../controllers/authController");

authRoute.post("/signup", authController.signup);

module.exports = authRoute;
