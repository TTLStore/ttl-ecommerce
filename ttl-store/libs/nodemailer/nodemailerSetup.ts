import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST as string,
  port: parseInt(process.env.EMAIL_SERVER_PORT as string, 10),
  auth: {
    user: process.env.EMAIL_SERVER_USER as string,
    pass: process.env.EMAIL_SERVER_PASSWORD as string,
  },
});