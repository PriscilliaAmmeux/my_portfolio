import mailjet from "node-mailjet";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const mailjetClient = mailjet.connect(
    process.env.EMAIL_USER,
    process.env.EMAIL_PASSWORD
  );
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: email, Name: name },
        To: [{ Email: "priscillia.ammeux.pro@gmail.com" }],
        Subject: `Message from ${name}`,
        TextPart: message,
      },
    ],
  });

  try {
    await request;
    res.status(200).json({ success: "Email sent successfully" });
  } catch (err) {
    console.log(err.statusCode);
    res.status(500).json({ error: "Error sending email: " + err.message });
  }
}
