import useOrder from "../../context/order/useOrder";
import "./ticketOrder.css";
import ProductItem from "../productItem/ProductItem";
const TicketOrder = (props) => {
    const { screen, setScreen } = props;
    const {
        order,
        clientName,
        handleSetClientName,
        handleChangeModalOrder,
        handleValidateClientName,
        clientNameOk } = useOrder()

    const packagesReverse = [...order].reverse()

    const writeClientName = (e) => {
        handleSetClientName(e.target.value)
        handleValidateClientName()
    }
    const toggleScreen = () => {
        if (clientName.length > 2 && packagesReverse.length > 0 && clientNameOk) {
            handleChangeModalOrder()
        }

    }
    return (
        <div className="ticketOrder">
            <input className={`input-client ${!clientNameOk ? "badName" : ""}`} type="text" placeholder="Nombre del cliente"
                onInput={writeClientName}
            />
            <div className="line"></div>
            <div id="listProducts" className="listProducts">
                {
                    packagesReverse.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
            <div className="line"></div>
            <p className="totalTicket"></p>

            <button
                className={`addOrderButton ${clientName.length > 2 &&
                        packagesReverse.length > 0 &&
                        clientNameOk ? "" : "buttonDesibled"}`}
                onClick={toggleScreen}>Agregar Orden</button>
        </div>
    )
}

export default TicketOrder