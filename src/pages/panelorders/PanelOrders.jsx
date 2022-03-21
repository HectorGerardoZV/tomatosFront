import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

//components
import axiosClient from "../../config/axiosClient";
import OrderList from '../../components/panelOrders/OrderList';

//images and icons
import back from '../../img/back.svg';
import search from '../../img/search.svg';

//Style
import "./panelOrders.css";
import StateScreen from "../../components/stateScreen/StateScreen";

const PanelOrders = (props) => {
    let navigate = useNavigate();
    let { state } = useParams();

    const [orders, setOrders] = useState([]);
    const [orderSelected, setOrder] = useState(null);
    const [orderAction, setOrderAction] = useState(null);


    const queryOrdersByState = async () => {
        try {
            const response = await axiosClient.get(`/orders/state/${state}`);
            const ordersJson = response.data;
            setOrders(ordersJson);
        } catch (error) {
            navigate("/cajero");
        }
    }


    useEffect(() => {
        queryOrdersByState();
    }, []);



    const backTo = () => {
        navigate("/cajero");
    }

    return (
        <>
            <div className="stateScreen">
                <div>
                    <div className="content">
                        <button className="btn-back" onClick={backTo}>
                            <img src={back} alt="volver" /> Volver
                        </button>


                        <form action="" className='form'>
                            <div className="input">
                                <input type="text" placeholder='Buscar Orden' />
                            </div>
                            <div className="btn-submit">
                                <button title='submit'>
                                    <img src={search} alt="Buscador" />
                                </button>
                                {/* <input type="submit" value={"Buscar"} /> */}
                            </div>
                        </form>
                    </div>
                    <div>
                        <OrderList
                            orders={orders}
                            setOrder={setOrder}
                            state={state}
                            setOrderAction={setOrderAction}
                        />
                    </div>
                </div>
                {
                    orderSelected ? (
                        <StateScreen
                            setOrder={setOrder}
                            orderSelected={orderSelected}
                            setOrders={setOrders}
                            orders={orders}
                            state={state}
                        />
                    ) : null
                }
            </div>
        </>
    )
}

export default PanelOrders