import Links from "./links/Links";
import style from './navbar.module.css';

export default function Navbar(){
    return (
        <div className={`${style.container}`}>
            <div className="text-2xl font-semibold">Logo</div>
            <Links/>
        </div>
    )
}