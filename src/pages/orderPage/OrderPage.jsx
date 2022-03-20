import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./orderPage.css"

import HeaderGeneric from "../../components/headerGeneric/HeaderGeneric"
import ProductPanel from "../../components/productPanel/ProductPanel"
import TicketOrder from "../../components/ticketOrder/TicketOrder"
import TicketView from "../../components/ticketView/TicketView"
const OrderPage = () => {
  let navigate = useNavigate();
  const categories = ["---Seleccione---", "Pizza", "Dogo", "Hamburguesas", "Boneless"]
  const [screen, setScreen] = useState(false);


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
              <select className="categories">
                {
                  categories.map(category => (
                    <option value={category}>{category}</option>
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