const [nodemailer] = [require("nodemailer")];

module.exports = {
  async registerMail(email, token) {
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAILPASSWORD,
        },
      });
      const mailOptions = {
          from : process.env.EMAIL,
          to : email,
          subject : 'Account Activation Link',
          html : `
            <h1>Please use the following link to activate your account.</h1>
            <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
            <hr />
            <p>This E-Mail may contain sensitive information.</p>
            <p>${process.env.CLIENT_URL}</p>
          `
      }
      await transporter.sendMail(mailOptions)
    }catch(err){
        console.log(err.message)
    }
  },
};
