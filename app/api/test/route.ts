import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Optionally, you can log request details or handle query parameters here
  console.log(request.url);

  return NextResponse.json({ message: "Hello, Next.js App Router!" });
}
