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
    const [ordesByclient, setOrdersClient] = useState([]);
    const [orderSelected, setOrder] = useState(null);
    const [clientName, setClientName] = useState("");


    const queryOrdersByState = async () => {
        try {
            const response = await axiosClient.get(`/orders/state/${state}`);
            const ordersJson = response.data;
            setOrders(ordersJson);

            if (clientName.trim() === "") {
                setOrdersClient(ordersJson)
            } else {
                setOrdersClient(orders.filter(order => order.client == clientName));
            }


        } catch (error) {
            navigate("/cajero");
        }
    }
    const handleInputClient = (e) => {
        setClientName(e.target.value)
    }
    const handleSubmitClientName = (e) => {
        e.preventDefault();
        let ordersClient = []
        if (clientName.trim() === "") {
            ordersClient = [...orders]
        } else {
            ordersClient = orders.filter(order =>
                order.client.trim().toLowerCase().includes(clientName.trim().toLowerCase()));
        }


        setOrdersClient(ordersClient);
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


                        <form action="" className='form'
                            onSubmit={handleSubmitClientName}
                        >
                            <div className="input">
                                <input type="text" placeholder='Buscar Orden'
                                    name="client"
                                    defaultValue={clientName}
                                    onInput={handleInputClient}
                                />
                            </div>
                            <div className="btn-submit">
                                <button title='submit'>
                                    <img src={search} alt="Buscador" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        {
                            ordesByclient.length === 0 ? (<h1 className="titlePanelOrders">No hay ordenes</h1>) : (
                                <OrderList
                                    orders={ordesByclient}
                                    setOrder={setOrder}
                                    state={state}
                                />
                            )
                        }
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