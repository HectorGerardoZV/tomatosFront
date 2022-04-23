import { useState, useEffect, createContext } from "react";
const OrderConext = createContext();
import  axiosClient from "../../config/axiosClient";


const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState({})
    const [modalProduct, setModalProduct] = useState(false);
    const [modalOrder, setModalOrder] = useState(false);
    const [clientName, setClientName] = useState("");
    const [orderFinished, setOrderFinished] = useState(false);
    const [total, setTotal] = useState(0)

    const handleChangeModal = () => {
        setModalProduct(!modalProduct);
    }
    const handleChangeModalOrder = () => {
        setModalOrder(!modalOrder);
    }
    const handleAddProductOrder = (product) => {
        const productFinaly = {
            ...product,
            total: product.salePrice*product.quantity
        }
        setOrder([...order, productFinaly])
        setTotal(total + (product.salePrice * product.quantity))
    }
    const handleAddCurrentProduct = (productItem) => {
        setProduct(productItem)
    }
    const handleUptadeQuantityProduct = (idProduct, action) => {
        let newOrder = [];
        if (action === "+") {
            newOrder = order.map(product => {
                if (product.id === idProduct) {
                    product.quantity = product.quantity += 1;
                    product.total = product.quantity*product.salePrice;
                }
                return product
            })
        } else if (action == "-") {
            newOrder = order.map(product => {
                if (product.id === idProduct) {
                    product.quantity = product.quantity -= 1;
                    product.total = product.quantity*product.salePrice;
                }

                return product
            })
            newOrder = newOrder.filter(product => product.quantity > 0);
        }
        let total = 0;
        newOrder.forEach(productItem => {
            total += productItem.salePrice * productItem.quantity
        })
        setTotal(total);
        setOrder(newOrder)
    }
    const handleDeleteCurrentProduct = () => {
        setProduct({})
    }
    const handleSetClientName = (name) => {
        setClientName(name)
    }
    const handleFinishOrder = () => {
        setOrderFinished(!orderFinished)
    }
    const handleResetOrderState = ()=>{
        setModalOrder(false)
        setOrderFinished(false);
        setOrder([]);
        setProduct({});
        setClientName("");
        setTotal(0);

    }

    const createNewOrder = async()=>{
        try {
            
            const finalyOrder = [
                {
                    user:2,
                    client: clientName,
                    total
                },
                order
            ]
            const response = await axiosClient.post("/orders",finalyOrder)
        } catch (error) {
        }
    }

    return (
        <OrderConext.Provider
            value={{
                order,
                modalProduct,
                modalOrder,
                product,
                clientName,
                orderFinished,
                total,
                handleAddProductOrder,
                handleChangeModal,
                handleAddCurrentProduct,
                handleDeleteCurrentProduct,
                handleUptadeQuantityProduct,
                handleSetClientName,
                handleChangeModalOrder,
                handleFinishOrder,
                createNewOrder,
                handleResetOrderState
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