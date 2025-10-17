import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import { useAppDispatch, useAppSelector } from "../../../app/hooks.js";
import { fetchProducts } from "../model/productsSlice.js";
import { addToCart } from "../../cart/model/cartSlice.js";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((s) => s.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  if (status === "loading") return <p className="muted">Завантаження…</p>;
  if (error) return <p style={{ color: "tomato" }}>Помилка: {error}</p>;

  return (
    <div className="grid">
      {items.map((p) => (
        <article className="card" key={p.id}>
          <img src={p.image} alt={p.title} />
          <h3 title={p.title}>
            {p.title.slice(0, 60)}
            {p.title.length > 60 ? "…" : ""}
          </h3>
          <div className="row">
            <span className="price">${p.price}</span>
            <Button onClick={() => dispatch(addToCart(p))}>Add to cart</Button>
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to={`/product/${p.id}`}>Details →</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
