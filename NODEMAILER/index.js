const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ganeshrajamaddi@gmail.com",
    pass: "ganeshshare"
  }
});

const mailOptions = {
  from: "ganeshrajamaddi@gmail.com",
  to: "ganeshmediaworks@gmail.com",
  subject: "Hi am internet",
  text: "wohoo it works"
};

transporter
  .sendMail(mailOptions)
  .then(d => console.log("email sent"))
  .catch(err => console.log(err));
