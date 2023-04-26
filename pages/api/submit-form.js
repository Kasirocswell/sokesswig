import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const formData = req.body;

  // create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 465,
    secure: true,
    auth: {
      user: "you@example.com",
      pass: "your-password",
    },
  });

  // send the email
  const info = await transporter.sendMail({
    from: "you@example.com",
    to: "recipient@example.com",
    subject: "New form submission",
    html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
  });

  console.log(`Email sent: ${info.messageId}`);

  // send a response to the client
  res.status(200).json({ message: "Form submitted successfully" });
}
