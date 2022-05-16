import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();
import IMAGE from "../../img/products/hamburguesa.png";
import axiosClient from "../../config/axiosClient";


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState(false);

    const queryApiGetAllProducts = async () => {
        try {
            const response = await axiosClient.get("/products");
            const { data } = response;
            const newProducts = data.map(product => {
                const newProduct = { ...product };
                newProduct.image = IMAGE;
                return newProduct

            })
            setProducts(newProducts.reverse());
        } catch (error) {
            setProducts([])
        }
    }
    const queryApiAddProduct = async (product) => {
        try {
            const response = await axiosClient.post("/products", product);
            const { data } = response;
            const newProduct = { ...data }
            newProduct.image = IMAGE
            setProducts([newProduct, ...products])
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    const queryApiDeleteProduct = async () => {
        try {
            await axiosClient.delete(`/products/${productSelected.id}`);
            const newProducts = products.filter(product => product.id !== productSelected.id);
            setProducts(newProducts)
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    const getQuantityProducts = () => {
        return products.length;
    }
    const handleSetProductSelected = (product) => {
        setProductSelected(product)
    }


    useEffect(() => {
        queryApiGetAllProducts();
    }, []);


    return (
        <ProductContext.Provider
            value={{
                products,
                productSelected,
                getQuantityProducts,
                queryApiAddProduct,
                handleSetProductSelected,
                queryApiDeleteProduct
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export { ProductProvider }
export default ProductContext






