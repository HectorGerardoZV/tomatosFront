import useModal from "../../../hooks/useModal"

import "./ModalStep1.css"
const ModalStep1 = () => {

  const { handleToggleModalStep2, handleToggleModalUpdateProduct } = useModal()
  const openModalStep2 = () => {
    handleToggleModalStep2()
  }
  const opneModalEdit = () => {
    handleToggleModalUpdateProduct();
  }

  return (
    <div className="modalStep1">
      <h2>¿Que quires hacer?</h2>

      <div className="optionsModalStep1">
        <button className="optionRed" onClick={openModalStep2}>Eliminar</button>
        <button className="optionOk" onClick={opneModalEdit}>Editar</button>
      </div>
    </div>
  )
}

export default ModalStep1