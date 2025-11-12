import { Outlet } from "react-router"
import Navbarx from "./Navbarx"
import Footer from "./Footer"

export default function Layput() {
    return (
        <div>
           <Navbarx/>
            <Outlet />
            <Footer/>
        </div>
    )
}


