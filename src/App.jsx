
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login"
import Principal from "./pages/principal/Principal"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cajero" element={<Principal />}>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
