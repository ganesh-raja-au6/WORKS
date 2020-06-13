// NPM Modules
const [path] = [require("path")];
// Mongoose Models
const User = require(path.join(__dirname, "..", "models", "User"));

// middlewares
const { async } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Get User
exports.getUser = async(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.password = undefined;
    return res.status(200).json({ message: user });
  } else {
    return res.status(422).json({ error: "User not found" });
  }
});

// Update User
exports.updateUser = async(async (req, res, next) => {
  const { username, password } = req.body;
  User.findById(req.params.id).exec((err, user) => {
    if (err) {
      return res.status(500).json({ err: err.message });
    } else {
      if (!username) {
        return res.status(400).json({ error: "username is required" });
      } else {
        user.username = username;
      }
      if (password) {
        if (password.length < 8) {
          return res.status(400).json({ error: "password is too short" });
        } else {
          user.password = password;
        }
      }
      user.save((err, user) => {
        if (err) {
          return res.status(500).json({ err: err.message });
        } else {
          user.password = undefined;
          return res.status(200).json(user);
        }
      });
    }
  });
});
