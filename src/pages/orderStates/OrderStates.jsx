
import { useNavigate } from "react-router-dom"

//images and icos
import iconPending from "../../img/pending.svg"
import iconComplete from "../../img/completed.svg"
import iconCanceled from "../../img/canceled.svg"

//Style
import "./orderStates.css"


const OrderStates = () => {
    let navigate = useNavigate();
    const goTo = (state) => {
        navigate(`panelorders/${state}`);
    }


    return (
        <section className="contentStates">
            <div className="cardState cardState-yellow" onClick={() => goTo("Pending")}>
                <img src={iconPending} alt="icono pending" />
                <p>Órdenes Pendientes</p>
            </div>

            <div className="cardState cardState-green" onClick={() => goTo("Completed")}>
                <img src={iconComplete} alt="icono complete" />
                <p>Órdenes Completadas</p>
            </div>

            <div className="cardState cardState-red" onClick={() => goTo("Canceled")}>
                <img src={iconCanceled} alt="icono canceled" />
                <p>Órdenes Canceladas</p>
            </div>
        </section>
    )
}

export default OrderStates