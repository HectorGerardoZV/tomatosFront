import useOrder from "../../context/order/useOrder";

import "./product.css"
const Product = (props) => {
  const { handleChangeModal, modalProduct, handleAddCurrentProduct } = useOrder();

  const { product } = props;
  const { image, name, salePrice } = product;

  const addProduct = () => {
    handleAddCurrentProduct(product)
    toggleModal();
  }
  const toggleModal = () => {
    handleChangeModal(!modalProduct)
  }
  return (
    <div className="product"
      onClick={addProduct}
    >
      <img className="product__img" src={image} alt="image product" />
      <p className="product__name">{name}</p>
      <p className="product__price">${salePrice}</p>
    </div>
  )
}

export default Product