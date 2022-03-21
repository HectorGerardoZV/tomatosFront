import plus from "../../img/plus.svg";
import less from "../../img/less.svg";
import "./productItem.css"

const ProductItem = (props) => {
    const { packageItem, addQuantityPackage, remuvePackage } = props;
    const { quantity } = packageItem;
    const { name, image } = packageItem.product;
    const plusQuantity = () => {
        packageItem.quantity += 1
        addQuantityPackage(packageItem)
    }
    const lessQuantity = () => {
        if (packageItem.quantity > 0) {
            packageItem.quantity -= 1
            addQuantityPackage(packageItem)

            if (packageItem.quantity == 0) {
                remuvePackage(packageItem)
            }
        }

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