import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "react-modal"
import useOrder from "../../context/order/useOrder"

//Components
import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"
import TicketView from "../../components/ticketView/TicketView"
import axiosClient from "../../config/axiosClient";
import ModalProduct from "../../components/modalProduct/ModalProduct"
//Style
import "./orderPage.css"
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
  const {modalIsOpen} =useOrder();

  //State
  const [screen, setScreen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsCategory, setFilters] = useState([]);
  const [packagesProduct, setPackages] = useState([]);
  const [total, setTotal] = useState(0);
  const [clientName, setClientName] = useState("");

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

  const addProductToList = (product) => {
    const packageAux = {
      product: product,
      productId: product.id,
      quantity: 1
    }

    const packagesFilters = packagesProduct.filter(packageIter => packageIter.productId == packageAux.productId)
    if (packagesFilters.length == 0) {
      setTotal(total + packageAux.product.salePrice)

      setPackages([...packagesProduct, packageAux])

    }
  }

  const addQuantityPackage = (packageItem) => {
    const productsSeletedCopy = packagesProduct.map(packageIter =>
      packageIter.productId == packageItem.productId ? packageItem : packageIter)
    setPackages(productsSeletedCopy)
  }

  const remuvePackage = (packageItem) => {
    const arrayPackages = packagesProduct.filter(packageAux => packageAux.productId != packageItem.productId);
    setPackages(arrayPackages)
  }

  const finishOrder = async (order) => {
    try {
      const response = await axiosClient.post("/orders", order)
      console.log(response.data);
      setSuccess(!success)
      setTimeout(() => {
        setScreen(false)
        setSuccess(false)
        navigate("/cajero")
      }, 1500);
    } catch (error) {
      navigate("/cajero")
    }
  }

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  }

  useEffect(() => {
    queryAllCategories()
    queryAllProducts()
  }, []);

  const backTo = () => {
    navigate("/cajero")
  }

  return (
    <>
      <div className="screen">
        <div>
          <HeaderGeneric

            onClick={toggleModal}
          />

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
                addProductToList={addProductToList}
              />
              <TicketOrder
                screen={screen}
                setScreen={setScreen}
                packagesProduct={packagesProduct}
                addQuantityPackage={addQuantityPackage}
                remuvePackage={remuvePackage}
                setTotal={setTotal}
                total={setTotal}
                setClientName={setClientName}
                clientName={clientName}
              />
            </section>

          </section>
        </div>
        {
          screen == true ? (
            <TicketView
              screen={screen}
              setScreen={setScreen}
              packagesProduct={packagesProduct}
              clientName={clientName}
              finishOrder={finishOrder}
              success={success}
            />) : null
        }
      </div>

      {
        modalIsOpen ? (<Modal
          isOpen={modalIsOpen}
          style={customStyles}
        >
          <ModalProduct/>
        </Modal>) : null
      }
    </>

  )
}

export default OrderPage