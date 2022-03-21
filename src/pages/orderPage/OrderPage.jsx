import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


//Components
import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"
import TicketView from "../../components/ticketView/TicketView"
import axiosClient from "../../config/axiosClient";
//Style
import "./orderPage.css"

const OrderPage = () => {
  let navigate = useNavigate();
  //State
  const [screen, setScreen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsCategory, setFilters] = useState([]);

  const [packagesProduct, setPackages] = useState([]);


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
      setPackages([...packagesProduct, packageAux])

    }
  }

  const addQuantityPackage = (packageItem) => {
    const productsSeletedCopy = packagesProduct.map(packageIter =>
      packageIter.productId == packageItem.productId ? packageItem : packageIter)
    setPackages(productsSeletedCopy)
  }


  const remuvePackage= (packageItem)=>{
    const arrayPackages = packagesProduct.filter(packageAux=>packageAux.productId!=packageItem.productId);
    setPackages(arrayPackages)
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
                addProductToList={addProductToList}
              />
              <TicketOrder
                screen={screen}
                setScreen={setScreen}
                packagesProduct={packagesProduct}
                addQuantityPackage={addQuantityPackage}
                remuvePackage={remuvePackage}
              />
            </section>

          </section>
        </div>
        {
          screen == true ? (
            <TicketView
              screen={screen}
              setScreen={setScreen}
            />) : null
        }
      </div>
    </>

  )
}

export default OrderPage