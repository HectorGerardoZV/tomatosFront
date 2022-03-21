import { useState } from "react";

//images and icons
import logoSmall from "../../img/logoSmall.svg";
import successIMG from "../../img/success.svg";

//Style
import "./ticketView.css"


const TicketView = (props) => {
    const { screen, setScreen, packagesProduct, clientName, finishOrder,success} = props
    const [cambio, setCambio] = useState(0);
    const [activeFinished, setActive] = useState(false);

    let total = 0;
    packagesProduct.forEach(packageProduct => {
        const { quantity, product } = packageProduct;
        const { salePrice } = product;
        total += (salePrice * quantity)
    });
    const toggleScreen = (e) => {
        const label = e.target;
        if (label.classList.contains("ticketView")) {
            setScreen(!screen)
        }
    }
    const readPayment = (e) => {
        const tag = e.target;
        const money = tag.value
        if (money >= total) {
            setCambio(money - total)
            setActive(true)
        } else {
            setCambio("Falta")
            setActive(false)
        }
    }
    const sendOrderFinish = () => {
        let packagesCopy = [...packagesProduct]
        packagesCopy = packagesCopy.map(packageAux => {
            const packageFinal = {
                product: packageAux.productId,
                quantity: packageAux.quantity,
                details: "",
                total: (packageAux.quantity * packageAux.product.salePrice)
            }
            return packageFinal
        })
        const orderFinished = [
            {
                user: 2,
                client: clientName,
                total
            },
            packagesCopy
        ]
        if (activeFinished) {
            finishOrder(orderFinished)
        }
    }


    return (

        <div className="ticketView"
            onClick={toggleScreen}
        >
            <div className={`ticketViewPanel ${success ? "border-success" : ""}`}>

                {
                    !success ? (
                        <>
                            <div className="logoSmall">
                                <img src={logoSmall} alt="logo tomatos" />
                            </div>

                            <div className="resume">
                                <label htmlFor="">Total a pagar</label>
                                <input disabled type="text" value={total} />
                            </div>
                            <div className="resume">
                                <label htmlFor="">Paga con</label>
                                <input type="number"
                                    onInput={readPayment}
                                />
                            </div>
                            <div className="resume">
                                <label htmlFor="">Cambio</label>
                                <input disabled type="text" value={cambio} />
                            </div>

                            <div className="buttonTicket">
                                <button
                                    onClick={sendOrderFinish}
                                >
                                    Finalizar
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="message">
                            <div className="message__icon">
                                <img src={successIMG} alt="completada" />
                            </div>
                            <p className="message__text">Orden Agregada</p>
                        </div>
                    )
                }


            </div>

        </div>

    )
}

export default TicketView