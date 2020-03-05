const [nodemailer] = [require("nodemailer")];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

const mailOptions = {
  from: "badukoraja@gmail.com",
  to: "sailas341@gmail.com",
  subject: "Hi You're Hacked",
  text: "I Love U"
};

transporter
  .sendMail(mailOptions)
  .then(success => console.log("Sent"))
  .catch(err => console.log(err));
