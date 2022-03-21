import { Outlet } from "react-router-dom"
import { useState } from "react"
//Components
import Header from "../../components/header/Header"
import Menu from "../../components/menu/Menu"
import PrincipalPanel from "../../components/principalPanel/PrincipalPanel"
//Style
import "./principal.css"
const Principal = () => {
    return (
        <>
            <div>
                <Header />
                <section className=" container layoutPrincipal">
                    <Menu />
                    <PrincipalPanel
                        Page={Outlet}
                    />
                </section>
            </div>
        </>
    )
}

export default Principal