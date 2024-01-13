"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import style from './links.module.css'

export default function Links() {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    const pathName = usePathname();
    const isAdmin = true;
    const isLogin = false

    return (
        <div className={`${style.links} text-md font-semibold flex gap-2`}>

                {
                    links.map((val, key) => {
                        return (
                                <Link
                                    href={val.path}
                                    key={key}
                                    className={`${pathName === val.path ? style.active : style.links}
                                    hover:bg-blue-500 rounded-xl p-1 w-24 text-center
                                `}
                                >
                                    {val.title}
                                </Link>
                        )
                    })
                }
                <Link href="/admin" className={`${pathName === '/admin' ? style.active : style.links}
                    ${isAdmin ? 'none' : 'hidden'}
                    hover:bg-blue-500 rounded-xl p-1 w-24 text-center`}>
                    Admin
                </Link>
                {
                    isLogin ?
                    <div>
                        <button className="hover:bg-red-400 rounded-xl p-1 w-24 text-center">Logout</button>
                    </div>
                    :<div>
                        <button className="hover:bg-green-400 rounded-xl p-1 w-24 text-center">Login</button>
                    </div>
                }
        </div>
    )
}