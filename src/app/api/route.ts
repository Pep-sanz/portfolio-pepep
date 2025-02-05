import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    return NextResponse.json({ success: true, data: 'hello world' });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
