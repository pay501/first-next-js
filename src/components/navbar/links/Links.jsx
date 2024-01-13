import Link from "next/link"

export default function Links () {
    
    const links = [
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        {
            title:"Admin",
            path:"/admin"
        },
        {
            title:"Contact",
            path:"contact"
        },
        
    ]

    return (
        <div>
            {
                links.map((val, key)=>{
                    return(
                        <Link href={val.path} key={key} >{val.title}</Link>
                    )
                })
            }
        </div>
    )
}