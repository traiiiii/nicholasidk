
import { NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/stress", "/"]
const publicRoutes = ["/login"]

export default async function proxy(req) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const token = req.cookies.get("session")?.value
    const session = await decrypt(token)

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/", req.url))
    }


    console.log(`${token} \n`)

    return NextResponse.next()
}