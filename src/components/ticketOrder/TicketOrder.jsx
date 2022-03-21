import { useState } from "react";


import "./ticketOrder.css";
import ProductItem from "../productItem/ProductItem";
const TicketOrder = (props) => {
    const { screen, setScreen, addQuantityPackage, packagesProduct, remuvePackage,clientName,setClientName } = props;


    const packagesReverse = [...packagesProduct].reverse()
    
    const writeClientName = (e) => {
        setClientName(e.target.value)
    }
    const toggleScreen = () => {
        if (clientName.length > 2 && packagesReverse.length > 0) {
            setScreen(!screen)
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
            <p className="totalTicket"></p>

            <button
                className={`addOrderButton ${clientName.length > 2 && packagesReverse.length > 0 ? "" : "buttonDesibled"}`}
                onClick={toggleScreen}>Agregar Orden</button>
        </div>
    )
}

export default TicketOrder