import { useState, useEffect, createContext } from "react";
const OrderConext = createContext();



const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleChangeModal = () => {
        setIsOpen(!modalIsOpen);
    }
    const handleAddProductOrder = (product) => {
        setOrder([...order, product])
    }
    const handleAddCurrentProduct = (productItem)=>{
        setProduct(productItem)
    }
    const handleDeleteCurrentProduct = ()=>{
        setProduct({})
    }
    return (
        <OrderConext.Provider
            value={{
                order, 
                modalIsOpen,
                product,
                handleAddProductOrder,
                handleChangeModal,
                handleAddCurrentProduct,
                handleDeleteCurrentProduct
            }}
        >
            {children}
        </OrderConext.Provider>
    )

}

export {
    OrderProvider
}
export default OrderConext