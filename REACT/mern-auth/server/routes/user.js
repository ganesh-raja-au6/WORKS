// NPM Packages
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { getUser, updateUser } = require(path.join(__dirname, "..", "controllers", "user"));

// middlewares
const {isAuthorized} = require(path.join(__dirname, "..", "middlewares", "isAuthorized"));

// Routes
router.get("/getUser/:id",isAuthorized, getUser);
router.put("/updateUser/",isAuthorized, updateUser);

module.exports = router;
