const nodemailer = require("nodemailer");

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e96b1930b9fd55",
    pass: "c16cfe75196c9e",
  },
};

const send = (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log("*** error:", error);
    } else {
      console.log("*** info:", info);
      return info.response;
    }
  });
};

const emailData = {
  from: "saskanka@gmail.com",
  to: "saskanka@gmail.com",
  title: "test title",
  text: "text test",
};

send(emailData);
