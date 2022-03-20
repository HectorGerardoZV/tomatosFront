import "./product.css"
const Product = (props) => {
  const {product} = props;
  const {image, name,price} = product;
  return (
    <div className="product">
        <img className="product__img" src={image} alt="image product" />
        <p className="product__name">{name}</p>
        <p className="product__price">${price}</p>
    </div>
  )
}

export default Product