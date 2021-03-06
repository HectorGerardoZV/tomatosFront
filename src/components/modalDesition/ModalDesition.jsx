import useModal from "../../hooks/useModal"
import ModalStep1 from "./modalStep1/ModalStep1"
import ModalStep2 from "./modalStep2/ModalStep2"

import "./ModalDesition.css"
import ModalAddProduct from "./modalAddProduct/ModalAddProduct"
import ModalEditProduct from "./modalEditProduct/ModalEditProduct"
const ModalDesition = () => {

  const { modalStep1, modalStep2, modalAddProduct,modalUpdateProduct, handleToggleModalDesition } = useModal()

  const closeModalDesition = (e) => {

    if (e.target.classList.contains("modalDesitionArea")) {
      handleToggleModalDesition()
    }
  }


  return (
    <div className="modalDesitionArea" onClick={closeModalDesition}>
      {modalStep1 ? (<ModalStep1 />) : null}
      {modalStep2 ? (<ModalStep2 />) : null}
      {modalAddProduct ? (<ModalAddProduct />) : null}
      {modalUpdateProduct?(<ModalEditProduct/>):null}


    </div>
  )
}

export default ModalDesition