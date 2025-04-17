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
    </div>
  )
}

export default App
