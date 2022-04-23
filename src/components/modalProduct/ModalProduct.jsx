import useOrder from "../../context/order/useOrder"

import "./ModalProduct.css"
const ModalProduct = () => {

    const { modalIsOpen, handleChangeModal, handleDeleteCurrentProduct, product } = useOrder();

    const closeModal = () => {
        handleChangeModal(!modalIsOpen)
        handleDeleteCurrentProduct();
    }
    const addProduct = () => {
        handleChangeModal(!modalIsOpen)
    }

    return (
        <div className="modalStyle">
            <h3 className="productTitle">Producto: <span>{product.name}</span></h3>
            <textarea placeholder="Descripción" className="productDescription"></textarea>
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