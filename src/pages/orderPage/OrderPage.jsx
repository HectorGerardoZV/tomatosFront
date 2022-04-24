import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "react-modal"
import useOrder from "../../context/order/useOrder"

//Components
import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"
import axiosClient from "../../config/axiosClient";
import ModalProduct from "../../components/modalProduct/ModalProduct"
//Style
import "./orderPage.css"
import ModalOrder from "../../components/modalOrder/ModalOrder"
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:"none",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "1rem",
  },
};
Modal.setAppElement('#root');

const OrderPage = () => {
  let navigate = useNavigate();
  const {modalProduct,modalOrder,handleResetOrderState} =useOrder();

  //State
  const [screen, setScreen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsCategory, setFilters] = useState([]);

  const queryAllCategories = async () => {
    try {
      const response = await axiosClient.get("/categories");
      const arrayDatos = response.data
      setCategories(arrayDatos)
    } catch (error) {

    }
  }

  const queryAllProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      const arrayDatos = response.data
      console.log(arrayDatos);
      setProducts(arrayDatos)
    } catch (error) {

    }
  }

  const filterProducts = (e) => {
    const category = e.target.value;
    if (category == -1) {
      const productsCategory = [...products];
      setFilters(productsCategory)
    } else {
      const productsCategory = products.filter(product => product.category == category);
      setFilters(productsCategory)
    }
  }


  useEffect(() => {
    queryAllCategories()
    queryAllProducts()
  }, []);

  const backTo = () => {
    handleResetOrderState();
    navigate("/cajero")
  }

  return (
    <>
      <div className="screen">
        <div>
          <HeaderGeneric />

          <section className="containerOrderPage">
            <div className="controls">
              <select className="categories"
                onChange={filterProducts}
              >
                <option key={-2} value={-2}>--Ninguna--</option>
                <option key={-1} value={-1}>--Todos--</option>
                {
                  categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>

              <button className="button-cancel"
                onClick={backTo}
              >
                Cancelar Orden
              </button>
            </div>

            <section className="layout-orderPage">
              <ProductPanel
                products={productsCategory}
              />
              <TicketOrder
                screen={screen}
                setScreen={setScreen}
              />
            </section>

          </section>
        </div>
        {
        modalOrder ? (<Modal
          isOpen={modalOrder}
          style={customStyles}
        >
          <ModalOrder/>
        </Modal>) : null
      }
      </div>

      {
        modalProduct ? (<Modal
          isOpen={modalProduct}
          style={customStyles}
        >
          <ModalProduct/>
        </Modal>) : null
      }
    </>

  )
}

export default OrderPage