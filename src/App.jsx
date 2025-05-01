import Footer from "./components/Footer"
import HomePage from "./components/Home"
import InformationPage from "./components/Information"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import ServicesPage from "./components/Services"
import SchedulePage from "./components/Schedule"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/information" element={<InformationPage/>} />
        <Route path="/schedule" element={<SchedulePage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
