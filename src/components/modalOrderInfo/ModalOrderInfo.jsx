import { useState } from "react"
import logoSmall from "../../img/logoSmall.svg";
import useOrder from "../../context/order/useOrder";
import "./ModalOrderInfo.css"
const ModalOrderInfo = () => {

    const { order, handleChangeModalOrder, total, handleFinishOrder,createNewOrder } = useOrder()
    const [pay, setPay] = useState(0);
    const [cambio, setCambio] = useState("");


    const toggleModal = () => {
        handleChangeModalOrder()
    }
    const handleWritePay = (e) => {
        const money = parseFloat(e.target.value);
        setPay(money)
        let newCambio = 0;

        if (money < total || e.target.value.trim() == "") {
            setCambio("Dinero insuficiente")
        }
        else {
            newCambio = money - total;
            setCambio(newCambio)
        }

    }

    const finishOrder = () => {
        createNewOrder();
        handleFinishOrder();
    }

    return (
        <div className="modalOrderInfo">
            <div className="imgModal">
                <img src={logoSmall} />
            </div>
            <div className="modalOrderInputs">
                <div className="inputLabelOrder">
                    <p>Total</p>
                    <input type="text" defaultValue={total} disabled={true} />
                </div>
                <div className="inputLabelOrder">
                    <p>Paga con</p>
                    <input type="number" min={0} onInput={handleWritePay} />
                </div>
                <div className="inputLabelOrder">
                    <p>Cambio</p>
                    <input type="text" defaultValue={cambio} disabled={true} />
                </div>
            </div>

            <div className="optionModalInfo">
                <button className="cancel"
                    onClick={toggleModal}
                >
                    Cancelar
                </button>
                <button className="finish"
                    onClick={finishOrder}
                >
                    Terminar
                </button>
            </div>
        </div>
    )
}

export default ModalOrderInfo