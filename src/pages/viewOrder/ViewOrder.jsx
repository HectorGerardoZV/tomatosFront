import React from "react";
import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric";

import "./viewOrder.css";
import back from "../../img/back.svg";

import ProductItemView from "../../components/productItemView/ProductItemView";
import InformationTicket from "../../components/informationTicket/IntormationTicket"

const SeeOrders = () => {
  return (
    <>
      <HeaderGeneric />
      <div className="layoutViewOrder">
        <div className="viewOrderContent">
          <button className="btn-back">
            <img src={back} alt="volver" /> Volver
          </button>

          <div className="viewOrderPanel">
            <div className="productsOrderView">
              <h2>Productos</h2>
              <div className="separator"></div>
              <div className="productItemView">
                <ProductItemView />
                <ProductItemView />
                <ProductItemView />
              </div>
            </div>
            <div className="informationOrderView">
              <h2>Informacion</h2>
              <div className="separator"></div>
              <InformationTicket/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeOrders;
