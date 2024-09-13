import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const URL = process.env.NEXT_PUBLIC_API_GITHUB_URL

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get(`${URL}/users/darthgart/repos`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_API_GITHUB_TOKEN}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching repos:', error.message);
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}