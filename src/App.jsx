import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"


import PanelOrders from "./pages/panelorders/PanelOrders"
import Principal from "./pages/principal/Principal"
import OrderPage from "./pages/orderPage/OrderPage"
import OrderStates from "./pages/orderStates/OrderStates"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cajero" element={<Principal />}>
          <Route index element={<OrderStates/>}/>
          <Route path="panelorders/:state" element={<PanelOrders />} />
        </Route>
        <Route path="/addOrder" element={<OrderPage />} />
        <Route path="/editOrder/:id" element={<OrderPage />} />

      </Routes>
    </Router >
  )
}

export default App
