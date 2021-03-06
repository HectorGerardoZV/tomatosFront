import { useReducer } from "react";

import {SET_ORDER_ACTION,DELETE_ORDER_ACTION} from "../../types/Types.js";
import panelOrderContext from "./panelOrderContext";
import panelOrderReducer from "./panelOrderReducer";

const PanelOrderState = (props) => {
    const initialState = {
        order:JSON.parse(localStorage.getItem("order"))
    }
    const [state,dispatch] = useReducer(panelOrderReducer,initialState);

    const setOrderEdit = (order)=>{
        localStorage.setItem("order",JSON.stringify(order))
        dispatch({
            type:SET_ORDER_ACTION,
            payload: order
        })
    }
    const deleteOrderEdit = ()=>{
        dispatch({
            type:DELETE_ORDER_ACTION,
        })
    }

  return (
    <panelOrderContext.Provider
        value={{
            order: state.order,
            setOrderEdit,
            deleteOrderEdit
        }}
    >
        {props.children}
    </panelOrderContext.Provider>
  )
}

export default PanelOrderState