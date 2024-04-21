import Login from "./pages/Login";
import Nav from "./components/Nav";
import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Chat" element={<Chat />} /> */}
        <Route
          path="/Chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
