const [
  createError,
  express,
  path,
  cookieParser,
  logger,
  Joi,
  mongoose,
  bcrypt
] = [
  require("http-errors"),
  require("express"),
  require("path"),
  require("cookie-parser"),
  require("morgan"),
  require("@hapi/joi"),
  require("mongoose"),
  require("bcryptjs")
];

require(path.join(__dirname, "..", "models", "db"));
const Employee = mongoose.model("user");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("register", { title: "Register" });
});

router.post("/", (req, res) => {
  let schema = Joi.object({
    fname: Joi.string()
      .min(3)
      .max(25),
    lname: Joi.string()
      .min(3)
      .max(25),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    cpassword: Joi.ref("password")
  });
  const {error, validate} = schema.validate({fname : req.body.fname, lname : req.body.lname, email : req.body.email, password : req.body.password})
  console.log(bcrypt)
  if(error) return res.render('register', {title : 'Register', error : error})
  bcrypt.hash(req.body.password, 10).then(hashed => {
      const employee = new Employee()
      employee.fname = req.body.fname,
      employee.lname = req.body.lname,
      employee.email = req.body.email,
      employee.password = hashed,
      employee.save((err, data)=> {
          if(err) return res.render('register', {title : 'Register', error : err})
          console.log('Data saved successfully')
          res.redirect('/users/login')
      })
  }).catch(err => console.log('err'))
});

module.exports = router;
