import { Link } from "react-router-dom";
import { useContext } from "react"
import panelOrderContext from "../../context/PanelOrderContext";

//Style
import "./menu.css"
//Images
import logoSmall from "../../img/logoSmall.svg";
import logOut from "../../img/logOut.svg";

const Menu = () => {
    const panelOrdersCT = useContext(panelOrderContext)
    const { order } = panelOrdersCT;


    return (
        <div className="menu">
            <div className="logoMenu">
                <img src={logoSmall} alt="logo tomatos small" />
                <div className="option">
                    <h3>Nombre Usuario</h3>
                </div>

            </div>

            <div className="menuOptions">
                <div className="option">
                    <Link to={"/addOrder"}>Agregar Orden</Link>
                </div>
                {
                    order ? (
                        <div className="option">
                            <Link to={`/viewOrder`}>Ver Orden</Link>
                        </div>
                    ) : null
                }
                <div className="option">
                    <Link to={"/"}>Ayuda</Link>
                </div>
            </div>
            <div className="logOut">
                <Link to={"/"} className="logOutIcon">
                    <img src={logOut} alt="cerrar sesión" />
                    <p>Salir</p>
                </Link>
            </div>

        </div>
    )
}

export default Menu