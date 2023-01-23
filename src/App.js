
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import EntrancePage from "./pages/EntrancePage"
import ExitPage from "./pages/ExitPage"
import tokenContext from "./contexts/tokenContext"
import userContext from "./contexts/userContext"
import { useState } from "react"


export default function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState("")


  return (
    <BrowserRouter>
      <tokenContext.Provider value={{ token, setToken }}>
        <userContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/nova-entrada" element={<EntrancePage />} />
            <Route path="/nova-saida" element={<ExitPage />} />
          </Routes>
        </userContext.Provider>
      </tokenContext.Provider>
    </BrowserRouter>
  )
}