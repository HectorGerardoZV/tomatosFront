
import Success from "../../img/success.svg";
import { useNavigate } from "react-router-dom";
import useOrder from "../../context/order/useOrder";
import "./ModalSuccess.css"
const ModalSuccess = () => {
    const navigate = useNavigate();
    const { handleResetOrderState } = useOrder();
    setTimeout(() => {
        handleResetOrderState();
        navigate("/cajero");
    }, 2000);
    return (
        <div>
            <div className="imgModal successIMG">
                <img src={Success} alt="" />
            </div>
            <h2 className="successMessage">Orden Agregada con existo</h2>
        </div>
    )
}

export default ModalSuccess