import { useState } from "react"

import useModal from "../../../hooks/useModal"
import useProducts from "../../../hooks/useProducts"
import Success from "../../../img/success.svg"

import "./ModalStep2.css"
const ModalStep2 = () => {

  const { handleToggleModalStep2, handleToggleModalDesition } = useModal()
  const { queryApiDeleteProduct, productSelected } = useProducts()
  const [success, setSuccess] = useState(false);

  const closeModalDesition2 = () => {
    handleToggleModalStep2()
  }
  const handleDeleteProduct = async () => {
    if (productSelected) {
      const deleted = await queryApiDeleteProduct();
      if (deleted) {
        setSuccess(true);
        setTimeout(() => {
          handleToggleModalDesition();
        }, 2000);
      }
    }
  }

  return (
    <div className="modalStep2">
      {
        success ? (
          <div className="modalProductSuccess">
            <img src={Success} />
            <h1>Producto eliminado</h1>
          </div>
        ) : (
          <>
            <h2>¿Seguro que deseas eliminarlo?</h2>

            <div className="optionsModalStep2">
              <button className="optionRed" onClick={closeModalDesition2}>No</button>
              <button className="optionOk" onClick={handleDeleteProduct}>Si</button>
            </div>
          </>
        )
      }

    </div>
  )
}

export default ModalStep2