import plus from "../../img/plus.svg";
import less from "../../img/less.svg";
import "./productItem.css"

const ProductItem = (props) => {
    const { productItem } = props;
    const { name, quantity, image } = productItem;
    return (
        <div className="productItem">
            <div className="productItem__image">
                <img src={image} alt="image product" />
                <p>{name}</p>
            </div>

            <p className="productItem__quantity">{quantity}</p>

            <div className="productItem__controls">
                <button>
                    <img src={plus} alt="agregar cantidad" />
                </button>
                <button>
                    <img src={less} alt="quitar cantidad" />
                </button>
            </div>
        </div>
    )
}

export default ProductItem