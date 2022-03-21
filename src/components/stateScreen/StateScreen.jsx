
import { useState, useEffect } from "react";
import axiosClient from "../../config/axiosClient";


//Style
import "./stateScreen.css"
const StateScreen = (props) => {
    const { setOrder, orderSelected, setOrders, orders, state } = props;

    const cancelEdition = (e) => {
        const tag = e.target;
        if (tag.classList.contains("stateScreenCard")) {
            setOrder(null);
        }

    }
    const changeState = async (stateSelected) => {
        try {

            if (stateSelected != state) {
                const orderCopy = { ...orderSelected };
                orderCopy.state = stateSelected;
                const response = await axiosClient.put(`/orders/${orderSelected.id}`, orderCopy);
                const ordersFilters = orders.filter(order => order.id != orderCopy.id);
                setOrders(ordersFilters);
            }

            setOrder(null)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="stateScreenCard"
            onClick={cancelEdition}
        >
            <div className="stateScreen__card">
                <h2>Cambiar estado de la orden</h2>
                <div className="stateActios">
                    <button className="changeState pendingState"
                        onClick={() => changeState("Pending")}
                    >
                        Pendiente
                    </button>
                    <button className="changeState completedState"
                        onClick={() => changeState("Completed")}
                    >
                        Completada
                    </button>
                    <button className="changeState canceledState"
                        onClick={() => changeState("Canceled")}
                    >
                        Cancelada
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StateScreen