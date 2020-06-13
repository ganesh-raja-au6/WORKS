// NPM Packages
const [path] = [require("path")];

// Mongoose Models
const User = require(path.join(__dirname, "..", "models", "User"));

exports.emailExists = async (req, res, next) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(406).json({ error: "Email already exists." });
  } else {
    next();
  }
};
