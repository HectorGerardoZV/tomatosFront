
import "./ticketOrder.css";
import hamburguesa from "../../img/products/hamburguesa.png";
import ProductItem from "../productItem/ProductItem";
const TicketOrder = (props) => {
    const {screen, setScreen} = props;
    const listProducts = [
        { id: 1, name: "Hamburguesa", quantity: 3, image: hamburguesa },
        { id: 2, name: "Hamburguesa", quantity: 3, image: hamburguesa },
        { id: 3, name: "Hamburguesa", quantity: 3, image: hamburguesa },
        { id: 4, name: "Hamburguesa", quantity: 3, image: hamburguesa },
        { id: 5, name: "Hamburguesa", quantity: 3, image: hamburguesa },
        { id: 6, name: "Hamburguesa", quantity: 3, image: hamburguesa }
    ]

    const toggleScreen = ()=>{
        setScreen(!screen)
    }
    return (
        <div className="ticketOrder">
            <input className="input-client" type="text" placeholder="Nombre del cliente" />
            <div className="line"></div>
            <div className="listProducts">
                {
                    listProducts.map(productItem => (
                        <ProductItem
                            key={productItem.id}
                            productItem={productItem}
                        />
                    ))
                }
            </div>
            <div className="line"></div>
            <p className="totalTicket">Total: <span> $345</span></p>

            <button className="addOrderButton" onClick={toggleScreen}>Agregar Orden</button>
        </div>
    )
}

export default TicketOrder