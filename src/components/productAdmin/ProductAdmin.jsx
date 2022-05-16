import useModal from "../../hooks/useModal";
import "../product/Product.css"
import "./ProductAdmin.css"
const ProductAdmin = (props) => {
    const { product } = props;
    const { image, name, salePrice } = product;
    const { handleToggleModalDesition, handleToggleModalStep1 } = useModal()

    const openModal = () => {
        handleToggleModalDesition()
        handleToggleModalStep1()
    }

    return (
        <div className="product productAnimation" onClick={openModal}>
            <img className="product__img" src={image} alt="image product" />
            <p className="product__name">{name}</p>
            <p className="product__price">${salePrice}</p>
        </div>
    )
}

export default ProductAdmin