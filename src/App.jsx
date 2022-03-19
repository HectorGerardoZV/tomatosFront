
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Principal from "./pages/principal/Principal"

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/cajero" element={<Principal />}>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
