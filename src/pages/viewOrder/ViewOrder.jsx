import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import panelOrderContext from "../../context/PanelOrderContext";

import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric";
import "./viewOrder.css";
import back from "../../img/back.svg";
import ProductItemView from "../../components/productItemView/ProductItemView";
import InformationTicket from "../../components/informationTicket/IntormationTicket"
import hamburguesa from "../../img/products/hamburguesa.png";

const SeeOrders = () => {
  let navigate = useNavigate()
  const panelOrderCT = useContext(panelOrderContext)
  const { order, deleteOrderEdit } = panelOrderCT
  
  const packagesOrder = (order.packageProducts);
  const products = packagesOrder.map(packageItem=>{
    const packageReturn ={
      img: hamburguesa,
      id:packageItem.id,
      quantity: packageItem.quantity,
      salePrice: (packageItem.total/packageItem.quantity),
      name: "Product"
    }
    return packageReturn
  })

  const backTo = () => {
    deleteOrderEdit()
    navigate(`/cajero/panelorders/${order.state}`)
  }
  return (
    <>
      <HeaderGeneric />
      <div className="layoutViewOrder">
        <div className="viewOrderContent">
          <button className="btn-back"
            onClick={backTo}
          >
            <img src={back} alt="volver" /> Volver
          </button>

          <div className="viewOrderPanel">
            <div className="productsOrderView">
              <h2>Productos</h2>
              <div className="separator"></div>
              <div className="productItemView">
                {
                  products.map(product => (
                    <ProductItemView
                      key={product.id}
                      product={product}
                    />
                  ))
                }
              </div>
            </div>
            <div className="informationOrderView">
              <h2>Informacion</h2>
              <div className="separator"></div>
              <InformationTicket 
              order={order}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeOrders;
