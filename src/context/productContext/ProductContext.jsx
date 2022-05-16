import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
import IMAGE from "../../img/products/hamburguesa.png";
import axiosClient from "../../config/axiosClient";


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const queryApiGetAllProducts = async () => {
        try {
            const response = await axiosClient.get("/products");
            const { data } = response;
            const newProducts = data.map(product => {
                const newProduct = { ...product };
                newProduct.image = IMAGE;
                return newProduct

            })
            setProducts(newProducts);
        } catch (error) {
            setProducts([])
        }
    }
    
    const queryApiAddProduct = async(product)=>{
        try {
            const response = await axiosClient.post("/products",product);
            const { data } = response;
            const newProduct = {...data}
            newProduct.image = IMAGE
            setProducts([...products, newProduct])
            return true;
        } catch (error) {
            console.log(error);
            return false;
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
                getQuantityProducts,
                queryApiAddProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext






