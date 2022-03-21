import "./ProductItemView";

import burguer from "../../img/products/hamburguesa.png";

import "./productItemView.css"

const ViewOrderProduct = () => {
  return (
    <div className="orderProductCard">
      <div className="productCard">
        <img src={burguer} alt="imagen hamburguesa" />
        <p className="productCardName">Hamburguesa</p>
      </div>

      <p className="productCardCost">$45</p>
      <p className="productCardQuantity">2</p>
    </div>
  );
};

export default ViewOrderProduct;
