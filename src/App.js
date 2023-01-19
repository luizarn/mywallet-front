
import LoginPage from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import EntrancePage from "./pages/EntrancePage"
import ExitPage from "./pages/ExitPage"


export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/nova-entrada" element={<EntrancePage/>} />
            <Route path="/nova-saida" element={<ExitPage/>} />
          </Routes>
   
    </BrowserRouter>
  )
}