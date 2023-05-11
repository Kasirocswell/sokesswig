import nodemailer from "nodemailer";

export async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "test",
      pass: "1234",
    },
  });

  let info = await transporter.sendMail({
    from: "lewis",
    to: to,
    subject: subject,
    text: text,
  });

  console.log("Message sent");
}
