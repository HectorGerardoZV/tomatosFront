import { useNavigate } from 'react-router-dom';
import OrderList from '../../components/panelOrders/OrderList';
import back from '../../img/back.svg';
import search from '../../img/search.svg';
import "./panelOrders.css";

const PanelOrders = () => {
    let navigate=useNavigate();

    const backTo=()=>{
        navigate("/cajero")
    }

    return (
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
                <OrderList />
            </div>
        </div>
    )
}

export default PanelOrders