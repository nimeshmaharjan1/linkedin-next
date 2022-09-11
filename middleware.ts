import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { origin } = request.nextUrl;
  if (request.nextUrl.pathname === "/") {
    const session = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (!session) return NextResponse.redirect(`${origin}/auth/login`);
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/",
// };
