const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure:true,
    auth: {
      user: "vivekpatel41744@gmail.com",
      pass: "hxhebrszhwdobayh",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

    let mailOptions = {
      from: "vivekpatel41744@gmail.com",
      to: "",
      subject: "Hello I am vivek",
      text: "Sending Mail To Node.js",
    };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(error)
      console.log(error);
    } else {
      console.log("Email sent successfully" + info.response);
      res.send("Email sent successfully" + info.response)
    }
  });
};
module.exports = sendMail;