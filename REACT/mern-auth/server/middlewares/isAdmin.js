// NPM Packages
const path = require("path");
const { verify } = require("jsonwebtoken");

// Mongoose Models
const User = require(path.join(__dirname, "..", "models", "User"));

// isAdmin
exports.isAdmin = async (req, res, next) => {
  User.findById(req.user._id).exec((err, user) => {
    if (user) {
      return res.status(500).json({ error: error.message });
    } else {
      if (user.role !== "admin") {
        return res
          .status(403)
          .json({ error: "Admin resource. Access denied." });
      } else {
        req.profile = user;
        next();
      }
    }
  });
};
