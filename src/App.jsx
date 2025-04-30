import Footer from "./components/Footer"
import HomePage from "./components/Home"
import InformationPage from "./components/Information"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/information" element={<InformationPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
