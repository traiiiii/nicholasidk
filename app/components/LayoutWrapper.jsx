"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function LayoutWrapper({ children }) {
    const pathname = usePathname()
    const isAuth = pathname.startsWith("/login")

    if (isAuth) {
        return (<>{children}</>)
    }

    return (
        <>
            <header>

            </header>

            <main className="flex flex-1 items-center justify-center">{children}</main>

            <footer className="pb-7 text-xl flex justify-center">
                <Link className="px-2" href="/">Home</Link>
                <Link className="px-2" href="/stress">Stress Meter</Link>
            </footer>
        </>
    );
}