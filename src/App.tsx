
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import SecretCode from "./pages/SecretCode";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/welcome" /> : <Login />}
      />
      <Route
        path="/welcome"
        element={user ? <Welcome /> : <Navigate to="/" />}
      />
      <Route
        path="/secret-code"
        element={user ? <SecretCode /> : <Navigate to="/" />}
      />
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
