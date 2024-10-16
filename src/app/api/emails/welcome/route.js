import { WelcomeMailTemp2 } from "@/emailTemplates/WelcomeMailTemp2";
import { resend } from "@/lib/resend";

export async function POST(request) {
  const { email, name, message, mailSubject } = await request.json();
  console.log({ email, name, message, mailSubject })
  /* database related কাম কাজ করব এখানে . শুরু... */
  /**
   * user create করব
   * user এর id নিব db থেকে 
   * user এর id mail এ পাঠিয়ে দিব
   */
  /* database related কাম কাজ করব এখানে . শেষ... */
  try {
    await resend.emails.send({
      from: `${process.env.NEXT_PUBLIC_SENDER_MAIL_ADDRESS}`,
      to: email,
      subject: mailSubject,
      react: WelcomeMailTemp2({ name, message }),
    });

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
