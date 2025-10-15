const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport")
const {saveRedirectUrl} = require("../middleware.js")
const userController = require("../controllers/users.js")

router.route("/signup")
.get( userController.renderSignUp)
.post( wrapAsync(userController.SignUp)
);

router.route("/login")
.get( userController.renderLogin)
.post( saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login" , failureFlash: true}),
 userController.Login);


router.get("/logout", userController.Logout)

module.exports = router;

