import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./store";
import { Home } from "./Pages/Home/Home";
import { Account } from "./Pages/Account";
import { Menu } from "./Pages/Menu";
import { Transactions } from "./Pages/Transactions";
import { Request } from "./Pages/Request";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home_logedout } from "./Pages/Home/Home_logedout";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={userInfo ? <Home /> : <Home_logedout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private Route */}
        <Route path="" element={<PrivateRoute />}>
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/request" element={<Request />} />
      </Route>
      {/* Redirect all other routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
