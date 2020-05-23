// Import npm modules
const [router, mongoose, path] = [
  require("express").Router(),
  require("mongoose"),
  require("path"),
];



// Controllers
const { Register, Login } = require(path.join(__dirname, "..", "controllers", "authControllers"));

// Middlewares
const {authorized} = require(path.join(__dirname, "..", "middlewares", "authorized"))

router.get('/', authorized, (req, res) => {
  return res.json('Hi')
})

// Routes - Register
router.post("/register", Register);

// Routes - Login
router.post('/login', Login)

module.exports = router;
