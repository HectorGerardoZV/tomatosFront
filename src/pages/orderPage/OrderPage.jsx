import { useState } from "react"

import "./orderPage.css"

import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"
import TicketView from "../../components/ticketView/TicketView"
const OrderPage = () => {
  const categories = ["---Seleccione---", "Pizza", "Dogo", "Hamburguesas", "Boneless"]
  const [screen, setScreen] = useState(false);
  return (
    <>
      <div className="screen">
        <div>
          <HeaderGeneric />

          <section className="containerOrderPage">
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
              <ProductPanel />
              <TicketOrder
                screen={screen}
                setScreen={setScreen}
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