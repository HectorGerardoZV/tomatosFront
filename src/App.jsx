import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Context
import PanelOrderState from "./context/panelOrder/PanelOrderState"
import { OrderProvider } from "./context/order/OrderProvider"

//Pages
import Login from "./pages/login/Login"
import PanelOrders from "./pages/panelorders/PanelOrders"
import Principal from "./pages/principal/Principal"
import OrderPage from "./pages/orderPage/OrderPage"
import OrderStates from "./pages/orderStates/OrderStates"
import ViewOrder from "./pages/viewOrder/ViewOrder"

function App() {

  return (
    <OrderProvider>
      <PanelOrderState>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cajero" element={<Principal />}>
              <Route index element={<OrderStates />} />
              <Route path="panelorders/:state" element={<PanelOrders />} />
            </Route>
            <Route path="/addOrder" element={<OrderPage />} />
            {/* <Route path="/editOrder" element={<OrderPage />} /> */}
            <Route path="/viewOrder" element={<ViewOrder />} />

          </Routes>
        </Router >
      </PanelOrderState>
    </OrderProvider>
  )
}

export default App
