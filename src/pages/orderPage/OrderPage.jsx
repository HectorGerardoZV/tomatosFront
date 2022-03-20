import "./orderPage.css"

import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"

const OrderPage = () => {
  const categories = ["---Seleccione---", "Pizza", "Dogo", "Hamburguesas", "Boneless"]

  return (
    <>
      <HeaderGeneric />

      <section className="container">
        <div className="controls">
          <select className="categories">
            {
              categories.map(category => (
                <option value={category}>{category}</option>
              ))
            }
          </select>

          <button className="button-cancel">Cancelar Orden</button>
        </div>

          <section className="layout-orderPage">
            <ProductPanel/>
          </section>

      </section>

    </>
  )
}

export default OrderPage