import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";

// Local Imports
import App from "./App.jsx";
import Test from "./pages/Test.jsx";
import Register from "./pages/Register.jsx";
import VerifyAuth from "./pages/VerifyAuth.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/test" element={<Test />} />

        <Route path="auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="verify" element={<VerifyAuth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
