import Footer from "./components/Footer"
import HomePage from "./components/Home"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
