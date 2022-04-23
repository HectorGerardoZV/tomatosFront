import plus from "../../img/plus.svg";
import less from "../../img/less.svg";
import useOrder from "../../context/order/useOrder";
import "./productItem.css"

const ProductItem = (props) => {
    const { handleUptadeQuantityProduct } = useOrder()
    const { product } = props;
    const { quantity, name, image } = product;
    const plusQuantity = () => {
        handleUptadeQuantityProduct(product.id, "+")
    }
    const lessQuantity = () => {
        handleUptadeQuantityProduct(product.id, "-")

    }
    return (
        <div className="productItem" >
            <div className="productItem__image">
                <img src={image} alt="image product" />
                <p>{name}</p>
            </div>

            <p className="productItem__quantity">{quantity}</p>

            <div className="productItem__controls">
                <button onClick={plusQuantity}>
                    <img src={plus} alt="agregar cantidad" />
                </button>
                <button onClick={lessQuantity}>
                    <img src={less} alt="quitar cantidad" />
                </button>
            </div>
        </div>
    )
}

export default ProductItem