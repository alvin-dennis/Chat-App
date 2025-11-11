import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "@/modules/home/page"
import LoginPage from "@/modules/auth/login/page"

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
  )
}

