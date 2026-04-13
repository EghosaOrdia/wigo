import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";

// Local Imports
import App from "./App.jsx";
import Test from "./pages/Test.jsx";
import Auth from "./pages/Auth.jsx";
import VerifyAuth from "./pages/VerifyAuth.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/verify" element={<VerifyAuth />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
