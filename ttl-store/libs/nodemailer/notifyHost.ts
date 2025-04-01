import { Options } from "nodemailer/lib/mailer";

function generateMessageForHost({
  hostEmail, memberEmail, metadata
}: {
  hostEmail: string,
  memberEmail: string,
  metadata?: object
}): Options {
  const message = {
    from: process.env.EMAIL_FROM as string,
    to: hostEmail,
    subject: "ShareHub - A new member has requested to join your subscription",
    html: `
      <h1>ShareHub - ttl store</h1>

      <p>A new member has requested to join your subscriptoin</p>
      <p>${memberEmail}</p>
      <p>Timestamp: ${new Date().toISOString()}</p>
    `
  };
  return message;
}

export default generateMessageForHost;