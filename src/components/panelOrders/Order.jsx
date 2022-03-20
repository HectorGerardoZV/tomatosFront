import clientYellow from "../../img/clientYellow.svg";
import quantityYelllow from "../../img/quantityYelllow.svg";
import moneyYellow from "../../img/moneyYellow.svg";
import "./panelOrdersComponents.css";

const Order = (props) => {
  const { order } = props;
  const { client, total, packageProducts } = order;
  return (
    <div className="containter-cards">


      <div className='order-card'>
        <li className="li">
          <img src={clientYellow} alt="icono cliente" />
          <p>{client}</p>
        </li>
        <li className="li">
          <img src={quantityYelllow} alt="icono productos" />
          <p>{packageProducts.length} - Productos</p>
        </li>
        <li className="li">
          <img src={moneyYellow} alt="icono costo" id="money" />
          <p>${total}</p>
        </li>
      </div>


    </div>
  )
}

export default Order