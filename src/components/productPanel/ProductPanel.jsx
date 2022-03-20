
import "./productPanel.css"
import hamburguesa from "../../img/products/hamburguesa.png";
import Product from "../product/Product";

const ProductPanel = () => {
    const products = [
        { id: 1, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 2, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 3, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 4, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 5, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 6, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 7, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 8, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 9, name: "Haburguesa", price: 80, image: hamburguesa },
        { id: 10, name: "Haburguesa", price: 80, image: hamburguesa },
    ]
    return (
        <div className="productPanel">
            {
                products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    )
}

export default ProductPanel