const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const uuid = require("uuid/v4");
const nodemailer = require("nodemailer");

let mail = async (email, secretToken) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ganeshrajamaddi@gmail.com",
      pass: "ganeshshare"
    }
  });
  let mailOptions = {
    from: "ganeshrajamaddi@gmail.com",
    to: email,
    subject: "Confirm Email",
    text:
      "Thankyou for registering with our website. click on the link below to activate your account.",
    html: `<a href='http://localhost:5000/users/emailVerification/${secretToken}'>click Here</a>`
  };
  await transporter.sendMail(mailOptions);
  console.log("email successfully sent");
};

router
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    try {
      const { email, username, password, confirmationPassword } = req.body;
      const schema = Joi.object({
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] }
        }),
        username: Joi.string()
          .alphanum()
          .min(3)
          .max(30)
          .required(),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
        confirmationPassword: Joi.ref("password")
      });
      const { error, result } = schema.validate({
        email: email,
        username: username,
        password: password,
        confirmationPassword: confirmationPassword
      });

      if (error) {
        req.flash("error", error.message);
        res.redirect("/users/register");
        return;
      } else {
        const user = await User.findOne({ email: email });
        if (user) {
          req.flash("error", "Email already Exists");
          return res.redirect("/users/register");
        } else {
          const secretToken = uuid();
          const hash = await bcrypt.hash(password, 10);
          const user = new User({
            email,
            username,
            password: hash,
            secretToken: secretToken,
            isVerified: false
          });
          await user.save();
          mail(email, secretToken);
          req.flash("success", "Registered Successfully now login");
          res.redirect("/users/emailVerification");
        }
      }
    } catch (error) {
      next(error);
    }
  });

router
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      req.flash("error", `Email doesn't Exists.`);
      return res.redirect("/users/login");
    } else {
      const confirmpassword = await bcrypt.compare(password, user.password);
      if (!confirmpassword) {
        req.flash("error", `Email or password doesn't match.`);
        return res.redirect("/users/login");
      } else {
        req.session.userId = user._id;
        res.redirect("/users/dashboard");
      }
    }
  });

router
  .route("/dashboard")
  .get(
    require("../middlewares/authorised"),
    require("../middlewares/isvalid"),
    (req, res) => {
      res.render("dashboard", {
        isAuthenticated: req.session.userId,
      });
    }
  );

router.route("/logout").get((req, res) => {
  req.session.destroy();
  return res.redirect("/users/login");
});

router.route("/emailVerification").get((req, res) => {
  res.render("emailVerification");
});

router.route("/emailVerification/:secretToken").get(async (req, res) => {
  const { secretToken } = req.params;
  const user = await User.findOne({ secretToken: secretToken });
  if (!user) {
    req.flash("error", "No valid user exists ");
    res.redirect("/users/register");
  } else {
    user.secretToken = "";
    user.isVerified = true;
    await user.save();
    req.session.userId = user._id;
    res.redirect("/users/dashboard");
  }
});

module.exports = router;
