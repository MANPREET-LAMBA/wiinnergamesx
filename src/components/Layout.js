import { Outlet } from "react-router"
import Navbarx from "./Navbarx"
import Footer from "./Footer"

export default function Layput() {
    return (
      <div className="min-h-screen flex flex-col">
  <Navbarx />
  <main className="flex-1">
    <Outlet />
  </main>
  <Footer />
</div>

    )
}


