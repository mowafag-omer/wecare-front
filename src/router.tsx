import { Routes, Route } from "react-router-dom";

import HomePage from "./js/pages/HomePage";
import LoginPage from "./js/pages/LoginPage";
import RegisterPage from "./js/pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Router;
