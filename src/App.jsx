import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Context
import PanelOrderState from "./context/panelOrder/PanelOrderState"
import { OrderProvider } from "./context/order/OrderProvider"
import { ProductProvider } from "./context/productContext/ProductContext"
import { ModalProvider } from "./context/modalContext/ModalContext"
import { AuthProvider } from "./context/authContext/AuthContext"

//Pages
import Login from "./pages/login/Login"
import PanelOrders from "./pages/panelorders/PanelOrders"
import Principal from "./pages/principal/Principal"
import OrderPage from "./pages/orderPage/OrderPage"
import OrderStates from "./pages/orderStates/OrderStates"
import ViewOrder from "./pages/viewOrder/ViewOrder"
import AdminMasterPage from "./pages/adminMasterPage/AdminMasterPage"
import AdminPage from "./pages/adminPage/AdminPage"
import AdminProducts from "./pages/adminProducts/AdminProducts"

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <PanelOrderState>
          <ProductProvider>
            <ModalProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/cajero" element={<Principal />}>
                    <Route index element={<OrderStates />} />
                    <Route path="panelorders/:state" element={<PanelOrders />} />
                  </Route>
                  <Route path="/addOrder" element={<OrderPage />} />
                  <Route path="/viewOrder" element={<ViewOrder />} />

                  <Route path="/admin" element={<AdminMasterPage />}>
                    <Route index element={<AdminPage />} />
                    <Route path="products" element={<AdminProducts />} />
                  </Route>
                </Routes>
              </Router >
            </ModalProvider>
          </ProductProvider>
        </PanelOrderState>
      </OrderProvider>
    </AuthProvider>
  )
}

export default App
