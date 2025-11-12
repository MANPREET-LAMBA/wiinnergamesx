import { Outlet , Link } from "react-router";
import Investment from "./Investment";

export default function Pageservice() {
    return (
       <div>
        {/* <Investment/> */}
        <Outlet/>
       </div>
    )
}