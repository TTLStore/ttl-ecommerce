import { transporter } from "./nodemailerSetup";
import { Options } from "nodemailer/lib/mailer";
export default async function sendEmailTo(payload: Options) {
  try {
    const info = await transporter.sendMail(payload);
    return info;
  } catch (error: any) {
    console.error("Error sending email", error);
    throw error;
  }
}