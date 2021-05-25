const { Service } = require("egg");
const nodemailer = require("nodemailer");

const userEmail = "xxx@126.com";
const transporter = nodemailer.createTransportj({
  service: "126",
  secureConnection: true,
  auth: {
    user: userEmail,
    pass: "xxxxx",
  },
});

class ToolService extends Service {
  async sendMail(email, subject, text, html) {
    const mailOptions = {
      from: userEmail,
      cc: userEmail,
      to: email,
      subject,
      text,
      html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      console.log("email error", err);
      return false;
    }
  }
}
