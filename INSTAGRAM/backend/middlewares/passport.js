// Npm modules
const [passport, localStrategy] = [
  require("passport"),
  require("passport-local").Strategy,
];

// DB Schema
const User = require(path.join(__dirname, "..", "models", "users"));

passport.use(new localStrategy((email, password, done) => {
    
}))