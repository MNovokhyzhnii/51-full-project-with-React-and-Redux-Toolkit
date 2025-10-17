import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="bar">
        <Link to="/" className="brand">
          <span className="dot" /> MiniShop
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
