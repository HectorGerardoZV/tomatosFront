import { useContext } from "react"
import ProductContext from "../context/productContext/ProductContext"

const useProducts = () => {
  return useContext(ProductContext)
}

export default useProducts