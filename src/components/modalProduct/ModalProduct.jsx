import { useState } from "react";
import useOrder from "../../context/order/useOrder"

import "./ModalProduct.css"
const ModalProduct = () => {

    const { modalIsOpen, handleChangeModal, handleDeleteCurrentProduct, handleAddProductOrder, product } = useOrder();
    const [details, setDetails] = useState("");

    const closeModal = () => {
        handleChangeModal(!modalIsOpen)
        handleDeleteCurrentProduct();
    }
    const addProduct = () => {
        const finalProduct = {...product, details, quantity:1};
        handleAddProductOrder(finalProduct)
        handleChangeModal(!modalIsOpen)
    }
    const handleWriteDescription = (e) => {
        setDetails(e.target.value);
    }

    return (
        <div className="modalStyle">
            <h3 className="productTitle">Producto: <span>{product.name}</span></h3>
            <textarea placeholder="Descripción" className="productDescription"
                name="description"
                defaultValue={details}
                onInput={handleWriteDescription}
            >

            </textarea>
            <div className="optionsModal">
                <button className="cancel"
                    onClick={closeModal}
                >
                    Cancelar
                </button>
                <button className="add"
                    onClick={addProduct}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ModalProduct