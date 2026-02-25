import { NextResponse } from 'next/server';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1888';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const strapiRes = await fetch(`${STRAPI_API_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          phone,
          message,
          submitted_at: new Date().toISOString(),
        },
      }),
    });

    if (!strapiRes.ok) {
      const errorData = await strapiRes.json();
      console.error('Strapi submission error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit to Strapi' },
        { status: strapiRes.status }
      );
    }

    const data = await strapiRes.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
