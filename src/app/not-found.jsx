"use client"

import Link from "next/link"

export default function NotFound () {
    return(
        <div>
            <h2>Not found 404</h2>
            <Link href='/'>return to Homepage</Link>
        </div>
    )
}