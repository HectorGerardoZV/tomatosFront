import { useContext } from "react";
import panelOrderContext from "../../context/panelOrder/panelOrderContext";

//images and icons
import clientYellow from "../../img/clientYellow.svg";
import quantityYelllow from "../../img/quantityYelllow.svg";
import moneyYellow from "../../img/moneyYellow.svg";

import clientGreen from "../../img/clientGreen.svg";
import quantityGreen from "../../img/quantityGreen.svg";
import moneyGreen from "../../img/moneyGreen.svg";

import clientRed from "../../img/clientRed.svg";
import quantityReed from "../../img/quantityRed.svg";
import moneyReed from "../../img/moneyRed.svg";

//Style
import "./panelOrdersComponents.css";

const Order = (props) => {
  const { order, setOrder, state } = props;

  const panelOrdersCT = useContext(panelOrderContext)
  const { setOrderEdit, deleteOrderEdit } = panelOrdersCT


  const { client, total, packageProducts, setOrderAction } = order;
  let borderStyle = "";
  let clientIcon = null;
  let quantityIcon = null;
  let moneyIcon = null;
  if (state == "Pending") {
    borderStyle = "orderPendingBorder"

    clientIcon = clientYellow;
    quantityIcon = quantityYelllow;
    moneyIcon = moneyYellow;
  } else if (state == "Completed") {
    borderStyle = "orderCompletedBorder"
    clientIcon = clientGreen;
    quantityIcon = quantityGreen;
    moneyIcon = moneyGreen;
  } else if (state == "Canceled") {
    borderStyle = "orderCanceledBorder"
    clientIcon = clientRed;
    quantityIcon = quantityReed;
    moneyIcon = moneyReed;
  }

  const selectProduct = () => {
    setOrder(order)
    deleteOrderEdit()
  }
  const selectOrderAction = () => {
    setOrderEdit(order)
  }
  return (
    <div className="containter-cards"
      onDoubleClick={selectProduct}
      onClick={selectOrderAction}
    >
      <div className={`order-card ${borderStyle}`}>
        <li className="li">
          <img src={clientIcon} alt="icono cliente" />
          <p>{client}</p>
        </li>
        <li className="li">
          <img src={quantityIcon} alt="icono productos" />
          <p>{packageProducts.length} - Pedido</p>
        </li>
        <li className="li">
          <img src={moneyIcon} alt="icono costo" id="money" />
          <p>${total}</p>
        </li>
      </div>
    </div>
  )
}

export default Order