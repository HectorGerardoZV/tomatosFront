
import { Link } from "react-router-dom";

//Images
import logoSmall from "../../img/logoSmall.svg";
import logOut from "../../img/logOut.svg";

import "../menu/Menu.css"
const MenuAdmin = () => {
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
            <Link to={"/admin/products"}>Productos</Link>
        </div>
       
        <div className="option">
            <Link to={"/admin"}>Categorias</Link>
        </div>
        <div className="option">
            <Link to={"/admin"}>Usuarios</Link>
        </div>
        <div className="option">
            <Link to={"/admin"}>Ayuda</Link>
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

export default MenuAdmin