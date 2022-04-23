import {useContext} from "react"
import OrderConext from "./OrderProvider"

const useOrder = ()=>{
    return useContext(OrderConext);
}
export default useOrder;
