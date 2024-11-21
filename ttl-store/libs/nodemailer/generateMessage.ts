import { transporter } from "./nodemailerSetup";

export async function generateMessage({ to, token }: { to: string; token: string }) {
  const message = {
    from: process.env.EMAIL_FROM as string,
    to,
    subject: "ShareHub - ttl store - Verification Token",
    html: `
      <h1>ShareHub - ttl store</h1>
      <p>Here is your verification link: 
        <a href="${process.env.NEXTAUTH_URL}/verify-email?token=${token}">Verify your email</a>
      </p>
      <p>Use this token to verify your email address</p>
      <p>Timestamp: ${new Date().toISOString()}</p>
    `
  };
  return message;
}

export async function sendVerificationEmail({ to, token }: { to: string; token: string }) {
  try {
    const message = await generateMessage({ to, token });
    const info = await transporter.sendMail(message);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error: any) {
    console.error("Error sending email", error);
    throw error;
  }
}