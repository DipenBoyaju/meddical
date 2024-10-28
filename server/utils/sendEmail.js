// server/utils/sendEmail.js
import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, htmlContent) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'boyaju.dipen@gmail.com',
      pass: 'fcbx avoc tmzd tmqd',
    },
  });

  const mailOptions = {
    from: 'boyaju.dipen@gmail.com',
    to: email,
    subject: subject,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail
