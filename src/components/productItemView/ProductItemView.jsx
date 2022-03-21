import "./productItemView.css"

const ViewOrderProduct = (props) => {
  const {product} =props

  return (
    <div className="orderProductCard">
      <div className="productCard">
        <img src={product.img} alt="imagen hamburguesa" />
        <p className="productCardName">{product.name}</p>
      </div>

      <p className="productCardCost">{product.cost}</p>
      <p className="productCardQuantity">{product.quantity}</p>
    </div>
  );
};

export default ViewOrderProduct;
