
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//Pages
import Principal from "./pages/principal/Principal"
import OrderPage from "./pages/orderPage/OrderPage"
function App() {

  return (
    <Router>
      <Routes>

        <Route path="/cajero" element={<Principal />}>

        </Route>
        <Route path="/addOrder" element={<OrderPage />} />
        <Route path="/editOrder/:id" element={<OrderPage />} />

      </Routes>
    </Router>
  )
}

export default App
