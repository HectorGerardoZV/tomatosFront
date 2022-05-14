import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import MenuAdmin from "../../components/menuAdmin/MenuAdmin"

import "./AdminMasterPage.css"
const AdminMasterPage = () => {
  return (
    <main>
      <div>
        <Header />
        <section className="container layoutPrincipal">
          <MenuAdmin
          />
          <div className="adminPanel">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  )
}

export default AdminMasterPage