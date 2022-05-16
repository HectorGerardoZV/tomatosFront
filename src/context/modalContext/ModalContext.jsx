import { createContext, useState } from "react"

const ModalContext = createContext()

const ModalProvider = ({ children }) => {

    const [modalDesition, setModalDesition] = useState(false);
    const [modalStep1, setModalStep1] = useState(false);
    const [modalStep2, setModalStep2] = useState(false);
    const [modalAddProduct, setModalAddProduct] = useState(false);


    const handleToggleModalDesition = () => {
        if (modalDesition) {
            setModalStep1(false);
            setModalStep2(false);
            setModalAddProduct(false);
        }
        setModalDesition(!modalDesition);
    }
    const handleToggleModalStep1 = () => {
        setModalStep1(!modalStep1)
        setModalStep2(false)
        setModalAddProduct(false);
    }
    const handleToggleModalStep2 = () => {

        if (modalStep2) {
            setModalStep1(true);
        } else {
            setModalStep1(false);
        }
        setModalAddProduct(false);
        setModalStep2(!modalStep2);

    }
    const handleToggleModalAddProduct = ()=>{
        if(!modalAddProduct){
            setModalStep1(false);
            setModalStep2(false);
        }
        setModalAddProduct(!modalAddProduct);
    }

    return (
        <ModalContext.Provider
            value={{
                modalDesition,
                modalStep1,
                modalStep2,
                modalAddProduct,
                handleToggleModalStep1,
                handleToggleModalStep2,
                handleToggleModalDesition,
                handleToggleModalAddProduct
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export { ModalProvider }

export default ModalContext