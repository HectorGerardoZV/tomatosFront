import useOrder from "../../context/order/useOrder";
import "./ticketOrder.css";
import ProductItem from "../productItem/ProductItem";
const TicketOrder = (props) => {
    const { screen, setScreen } = props;
    const {order, clientName, handleSetClientName,handleChangeModalOrder} = useOrder()

    const packagesReverse = [...order].reverse()
    
    const writeClientName = (e) => {
        handleSetClientName(e.target.value)
    }
    const toggleScreen = () => {
        if (clientName.length > 2 && packagesReverse.length > 0) {
            handleChangeModalOrder()
        }

    }
    return (
        <div className="ticketOrder">
            <input className="input-client" type="text" placeholder="Nombre del cliente"
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
                className={`addOrderButton ${clientName.length > 2 && packagesReverse.length > 0 ? "" : "buttonDesibled"}`}
                onClick={toggleScreen}>Agregar Orden</button>
        </div>
    )
}

export default TicketOrder