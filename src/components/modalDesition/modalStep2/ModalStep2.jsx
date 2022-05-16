import useModal from "../../../hooks/useModal"

import "./ModalStep2.css"
const ModalStep2 = () => {

  const {handleToggleModalStep2} = useModal()

  const closeModalDesition2 = ()=>{
    handleToggleModalStep2()
  }

  return (
    <div className="modalStep2">
      <h2>¿Seguro que deseas eliminarlo?</h2>

      <div className="optionsModalStep2">
        <button className="optionRed" onClick={closeModalDesition2}>No</button>
        <button className="optionOk">Si</button>
      </div>
    </div>
  )
}

export default ModalStep2