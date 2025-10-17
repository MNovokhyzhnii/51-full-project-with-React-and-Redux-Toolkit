import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import CartPage from "../pages/CartPage.jsx";

export default function AppRoutes() {
  return (
    <>
      <nav className="nav" style={{ marginBottom: 14 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
