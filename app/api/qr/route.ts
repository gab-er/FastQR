import { NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function POST(request: Request) {
  const body = await request.json();
  const url = body;

  return NextResponse.json({ message: `Received URL: ${url}` }, { status: 200 });
}