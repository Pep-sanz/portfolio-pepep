import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, message, name } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pepepsr4@gmail.com',
      subject: `${name}-${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email berhasil dikirim!' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Gagal mengirim email' },
      { status: 500 },
    );
  }
}
