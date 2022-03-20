
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PanelOrders from "./pages/panelorders/PanelOrders"
import Principal from "./pages/principal/Principal"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/cajero" element={<Principal />}>
          <Route path="panelorders" element={<PanelOrders/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
