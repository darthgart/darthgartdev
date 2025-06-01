import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const GITHUB_URL = process.env.NEXT_PUBLIC_API_GITHUB_URL
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_API_GITHUB_TOKEN;

export async function GET(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const isBrowser = userAgent.includes("Mozilla");

  if (isBrowser) {
    return NextResponse.json({ error: "Acceso no autorizado" }, { status: 403 });
  }
  try {
    const response = await axios.get(`${GITHUB_URL}/users/darthgart/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}