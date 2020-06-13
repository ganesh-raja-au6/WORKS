// NPM Packages
const [router, path] = [require("express").Router(), require("path")];

// Controllers
const { signup, signin, accountActivation } = require(path.join(__dirname, "..", "controllers", "auth"));
const { signupValidation, signinValidation } = require(path.join(__dirname, "..", "middlewares", "Validation"));
const { emailExists } = require(path.join(__dirname, "..", "middlewares", "emailExists"));

// Routes
router.post("/signup", emailExists, signupValidation, signup);
router.post("/accountActivation", accountActivation);
router.post('/signin', signinValidation, signin)

module.exports = router;
