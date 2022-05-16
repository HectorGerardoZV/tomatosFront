import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import MenuAdmin from "../../components/menuAdmin/MenuAdmin"
import useModal from "../../hooks/useModal"
import ModalDesition from "../../components/modalDesition/ModalDesition"

import "./AdminMasterPage.css"
const AdminMasterPage = () => {

  const { modalDesition } = useModal()
  return (
    <main className="adminMasterPage">
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
      {
        modalDesition ? (<ModalDesition />) : null
      }
    </main>
  )
}

export default AdminMasterPage