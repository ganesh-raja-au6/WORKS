// Npm modules
const [Joi, mongoose, path] = [
  require("@hapi/joi"),
  require("mongoose"),
  require("path"),
];
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

// DB Schema
const User = require(path.join(__dirname, "..", "models", "users"));

// Middlewares
const {async} = require(path.join(__dirname, "..", 'middlewares', 'asyncHandler'));

// Register
exports.Register = async(async (req, res, next) => {
  const { username, password, email, fullname } = req.body;
  if (!username || !password || !email || !fullname) {
    return res.status(422).json({ error: "Please fill all the fields." });
  } else {
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists." });
    } else {
      const schema = Joi.object({
        username: Joi.string().min(4).max(25).required().alphanum(),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
        fullname: Joi.string().min(4).max(25).required(),
      });
      const { result, error } = schema.validate({
        username,
        password,
        email,
        fullname,
      });
      if (error) {
        return res.status(400).json({ error: error.message });
      } else {
        const hashed = await hash(password, 10);
        const user = new User({ username, password: hashed, email, fullname });
        await user.save();
        return res.status(200).json({ message: "Registered successfully." });
      }
    }
  }
});

// Login
exports.Login = async(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: "Please fill all the fields." });
  } else {
    const emailMatched = await User.findOne({ email });
    if (!emailMatched) {
      return res.status(403).json({ error: "Invalid email or password." });
    } else {
      const passwordMatched = await compare(password, emailMatched.password);
      if (!passwordMatched) {
        return res.status(403).json({ error: "Invalid email or password." });
      } else {
        const token = await sign({_id : emailMatched._id}, process.env.JWTSECRET, {expiresIn : 60 * 60})
        return res.status(200).json({ message: "Logged in successfully.", token });
      }
    }
  }
});
