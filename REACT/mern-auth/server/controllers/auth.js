// NPM packages
const [path] = [require("path")];
const { hash, compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");

// Mongoose Models
const User = require(path.join(__dirname, "..", "models", "User"));

// middlewares
const { registerMail } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "emailActivation"
));
const { async } = require(path.join(
  __dirname,
  "..",
  "middlewares",
  "asyncHandler"
));

// Signup
exports.signup = async(async (req, res, next) => {
  const { username, email, password } = req.body;
  const token = await sign(
    { username, email, password },
    process.env.JWT_ACTIVATION,
    { expiresIn: "10m" }
  );
  registerMail(email, token);
  return res.status(200).json({
    message:
      "An email has been sent to registered mail address, Follow the instructions to activate your account.",
  });
});

// Account Activation
exports.accountActivation = async(async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return res
      .status(401)
      .json({ error: "oops. something went wrong, please try again." });
  } else {
    verify(token, process.env.JWT_ACTIVATION, (err, payload) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Activation link expaired, please signup again" });
      } else {
        const { username, email, password } = payload;
        hash(password, 10).then((hashedPassword) => {
          const user = new User({ username, email, password: hashedPassword });
          user
            .save()
            .then((user) =>
              res
                .status(200)
                .json({
                  message: "Account verified Successfully, Please signIn",
                })
            )
            .catch((err) => res.status(500).json({ error: err }));
        });
      }
    });
  }
});

// Signin
exports.signin = async (async (req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({ error: 'Invalid email or password'})
    }else{
        const verify = await compare(password, user.password)
        if(!verify){
            return res.status(400).json({ error: "Invalid email or password"})
        }else{
            const token = await sign({_id : user._id}, process.env.JWT_SECRET, {expiresIn : '7d'})
            const {username, email, role, _id} = user
            return res.status(200).json({message : 'Successfully logged in.',token, user : {username, email, role}})
        }
    }
})