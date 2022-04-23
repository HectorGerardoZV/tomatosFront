import useOrder from "../../context/order/useOrder"

//images and icons

import successIMG from "../../img/success.svg";
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import ModalSuccess from "../modalSuccess/ModalSuccess"
import "./ModalOrder.css"
const ModalOrder = () => {

    const { handleChangeModalOrder, handleFinishOrder, orderFinished } = useOrder();

    return (
        <div className="modalOrder"

        >
            {
                !orderFinished ? (
                    <ModalOrderInfo />
                ) : (
                    <ModalSuccess />
                )
            }

        </div>
    )
}

export default ModalOrder