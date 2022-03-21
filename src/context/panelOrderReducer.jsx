import {SET_ORDER_ACTION,DELETE_ORDER_ACTION} from "../types/Types.js";
export default (state, action)=>{
    switch(action.type){
        case SET_ORDER_ACTION:
            return {
                ...state,
                order:action.payload
            }
        case DELETE_ORDER_ACTION:
            localStorage.setItem("order",null)
            return {
                ...state,
                order:null
            }
        default:
            return {
                ...state
            }
    }
}