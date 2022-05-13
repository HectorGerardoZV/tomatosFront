import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
import IMAGE from "../../img/products/hamburguesa.png";

const productAPI = [
    { id: 1, img: IMAGE, name: "product1", basePrice: 100, salePrice: 200, description: "", category: 1 },
    { id: 2, img: IMAGE, name: "product2", basePrice: 100, salePrice: 200, description: "", category: 2 },
    { id: 3, img: IMAGE, name: "product3", basePrice: 100, salePrice: 200, description: "", category: 2 },
    { id: 4, img: IMAGE, name: "product4", basePrice: 100, salePrice: 200, description: "", category: 3 },
    { id: 5, img: IMAGE, name: "product5", basePrice: 100, salePrice: 200, description: "", category: 1 },
    { id: 6, img: IMAGE, name: "product6", basePrice: 100, salePrice: 200, description: "", category: 1 },
]

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const queryApiGetAllProducts = () => {
        try {
            setProducts(productAPI)
        } catch (error) {

        }
    }
    const getQuantityProducts = () => {
        return products.length;
    }

    useEffect(() => {
        queryApiGetAllProducts();
    }, []);


    return (
        <ProductContext.Provider
            value={{
                products,
                getQuantityProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext






