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
        }, 1000);
    }
    return (
        <>
            {
                !success ? (
                    <div className="ticketView"
                        onClick={toggleScreen}
                    >

                        <div className="ticketViewPanel">
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

                        </div>

                    </div>
                ) : (
                    <div className="success">
                        <div className="successPanel">
                            <div className="success__img">
                                <img src={successIMG} alt="" />
                            </div>

                            <p className="message">Orden Agregada</p>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default TicketView