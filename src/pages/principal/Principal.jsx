import { Outlet, useParams } from "react-router-dom"
//Components
import Header from "../../components/header/Header"
import Menu from "../../components/menu/Menu"
import PrincipalPanel from "../../components/principalPanel/PrincipalPanel"
//Style
import "./principal.css"
const Principal = () => {
    const { state } = useParams();
    

    return (
        <>
            <div>
                <Header />
                <section className=" container layoutPrincipal">
                    <Menu
                        state={state}
                    />
                    <PrincipalPanel
                        Page={Outlet}
                    />
                </section>
            </div>
        </>
    )
}

export default Principal