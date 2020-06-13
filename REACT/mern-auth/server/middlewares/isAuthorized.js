// NPM Packages
const path = require("path");
const { verify } = require("jsonwebtoken");

// Mongoose Models
const User = require(path.join(__dirname, "..", "models", "User"));

// Authorization
exports.isAuthorized = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ error: "You must be signed in" });
  } else {
    const token = authorization.replace("Bearer ", "");
    await verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      } else {
        const { _id } = payload;
        User.findOne({ _id }).then((user) => {
          req.user = user;
          next();
        });
      }
    });
  }
};
