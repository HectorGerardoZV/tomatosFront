import { Link } from "react-router-dom";


//Style
import "./menu.css"
//Images
import logoSmall from "../../img/logoSmall.svg";
import logOut from "../../img/logOut.svg";

const Menu = () => {
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