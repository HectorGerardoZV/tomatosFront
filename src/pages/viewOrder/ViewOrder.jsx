import React from "react";
import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric";
import "./viewOrder.css";
import back from "../../img/back.svg";
import ProductItemView from "../../components/productItemView/ProductItemView";
import InformationTicket from "../../components/informationTicket/IntormationTicket"
import hamburguesa from "../../img/products/hamburguesa.png";

const SeeOrders = () => {
  const products = [
    {
      id: "1",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "2",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "3",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "4",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "5",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "6",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    },
    {
      id: "7",
      name: "Hamburguesa",
      cost: "$45",
      quantity: "3",
      img: hamburguesa
    }
  ]
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
              <InformationTicket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeeOrders;
