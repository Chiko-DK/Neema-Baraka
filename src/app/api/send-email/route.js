import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'NeemaBaraka <info@heritierkaumbu.xyz>',      // buy domain
      to: ['cdamberd@gmail.com'],                         // change neema gmail // .env API too
      subject: `New Form Submission from: ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
