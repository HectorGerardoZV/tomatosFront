
import "./ticketOrder.css";
import hamburguesa from "../../img/products/hamburguesa.png";
import ProductItem from "../productItem/ProductItem";
const TicketOrder = (props) => {
    const { screen, setScreen, addQuantityPackage, packagesProduct,remuvePackage } = props;
    const packagesReverse = [...packagesProduct].reverse()


    const toggleScreen = () => {
        setScreen(!screen)
    }
    return (
        <div className="ticketOrder">
            <input className="input-client" type="text" placeholder="Nombre del cliente" />
            <div className="line"></div>
            <div id="listProducts" className="listProducts">
                {
                    packagesReverse.map(packageItem => (
                        <ProductItem
                            key={packageItem.productId}
                            packageItem={packageItem}
                            addQuantityPackage={addQuantityPackage}
                            remuvePackage={remuvePackage}
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