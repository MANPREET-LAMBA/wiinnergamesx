import { Outlet , Link } from "react-router";
import Investment from "./Investment";
import Navbarx from "../Navbarx";
import Footer from "../Footer";

export default function Pageservice() {
    return (
      <div className="min-h-screen flex flex-col">
 
  <main className="flex-1">
    <Outlet />
  </main>
 
</div>

    )
}