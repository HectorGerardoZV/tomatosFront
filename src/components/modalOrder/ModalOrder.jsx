import useOrder from "../../context/order/useOrder"

//images and icons
import ModalOrderInfo from "../modalOrderInfo/ModalOrderInfo";
import ModalSuccess from "../modalSuccess/ModalSuccess"
import "./ModalOrder.css"
const ModalOrder = () => {

    const { orderFinished } = useOrder();

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