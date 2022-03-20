import "./orderPage.css"

import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"

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
            <TicketOrder/>
          </section>

      </section>

    </>
  )
}

export default OrderPage