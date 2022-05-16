import { useContext } from "react"
import ModalContext from "../context/modalContext/ModalContext"

const useModal = () => {
  return useContext(ModalContext)
}

export default useModal