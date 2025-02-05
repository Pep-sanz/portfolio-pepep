import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = 'pepepsr4@gmail.com';

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    const response = await resend.emails.send({
      from: 'pepep portfolio <marketing.example.com>',
      to: [myEmail],
      subject: `${name}, from ${email}`,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
