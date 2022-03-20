import clientYellow from "../../img/clientYellow.svg";
import quantityYelllow from "../../img/quantityYelllow.svg";
import moneyYellow from "../../img/moneyYellow.svg";
import "./panelOrdersComponents.css";

const Order = (props) => {
  const { order } = props

  return (
    <div className="containter-cards">


      <div className='order-card'>
        <li className="li">
          <img src={clientYellow} alt="icono cliente" />
          <p>{order.client}</p>
        </li>
        <li className="li">
          <img src={quantityYelllow} alt="icono productos" />
          <p>{order.quantity}</p>
        </li>
        <li className="li">
          <img src={moneyYellow} alt="icono costo" id="money" />
          <p>{order.cost}</p>
        </li>
      </div>


    </div>
  )
}

export default Order