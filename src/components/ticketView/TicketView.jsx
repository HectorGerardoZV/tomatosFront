import { useState } from "react";
import "./ticketView.css"
import logoSmall from "../../img/logoSmall.svg";
import successIMG from "../../img/success.svg";
import { useNavigate } from "react-router-dom";

const TicketView = (props) => {
    let navigate = useNavigate();
    const { screen, setScreen } = props

    const [success, setSuccess] = useState(false);

    const toggleScreen = (e) => {
        const label = e.target;
        if (label.classList.contains("ticketView")) {
            setScreen(!screen)
        }
    }
    const finishOrder = () => {
        setSuccess(!success)
        setTimeout(() => {
            setScreen(false)
            setSuccess(false)

            navigate("/cajero")
        }, 1500);
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
                                <input disabled type="text" />
                            </div>
                            <div className="resume">
                                <label htmlFor="">Paga con</label>
                                <input type="text" />
                            </div>
                            <div className="resume">
                                <label htmlFor="">Cambio</label>
                                <input disabled type="text" />
                            </div>

                            <div className="buttonTicket">
                                <button
                                    onClick={finishOrder}
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