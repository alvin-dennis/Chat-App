import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Chat } from "./components/modules/Chat";
import { AuthContext } from "./components/AuthContext";
import Landing from "./components/modules/Landing";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(!!cookies.get("auth-token"));

  return (
    <BrowserRouter>
      <AuthContext isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={() => { }}>
        <Routes>
          <Route
            path="/"
            element={<Landing isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
          <Route
            path="/chat"
            element={isAuth ? <Chat /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  );
}

export default ChatApp;