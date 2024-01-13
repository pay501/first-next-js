"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import style from './links.module.css'

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

export default function Links() {

    const pathName = usePathname();
    const isAdmin = true;
    const isLogin = false
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <main className={`${style.links} text-md font-semibold flex gap-2`}>
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
            </main>
            <main className={`${style.mobile} mr-4`}>
                <button
                    className={style.menuBtn}
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    Menu
                </button>
                <div className={ `${ isOpen ? style.mobileLink : 'hidden'}`}>
                    {
                        isOpen ?
                            <div className={`flex flex-col gap-4`}>
                                {
                                    links.map((val, key)=>{return(
                                        <Link
                                            href={val.path}
                                            key={key}
                                            className={`hover:bg-slate-300 rounded-xl p-1  text-center hover:text-black`}
                                        >
                                            { val.title }
                                        </Link>
                                    )})
                                }
                                <Link href="/admin" className={`${pathName === '/admin' ? style.active : 'none'}
                                    ${isAdmin ? 'none' : 'hidden'}
                                    hover:bg-slate-300 hover:text-black rounded-xl p-1  text-center`}
                                >
                                    Admin
                                </Link>
                            </div>
                            
                        : <div></div>
                    }
                </div>
            </main>
        </div>
    )
}