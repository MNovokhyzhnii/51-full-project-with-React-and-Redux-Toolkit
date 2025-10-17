import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks.js";
import { fetchProductById } from "../features/products/model/productsSlice.js";
import Button from "../components/Button.jsx";
import { addToCart } from "../features/cart/model/cartSlice.js";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { current } = useAppSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);
  if (!current) return <p className="muted">Loading…</p>;

  return (
    <article className="card">
      <div className="row" style={{ alignItems: "start", gap: 20 }}>
        <img
          src={current.image}
          alt={current.title}
          style={{
            width: 280,
            height: 280,
            objectFit: "contain",
            background: "#0f1528",
            borderRadius: 12,
          }}
        />
        <div>
          <h2>{current.title}</h2>
          <p className="muted">{current.description}</p>
          <div className="row" style={{ marginTop: 10 }}>
            <span className="price" style={{ fontSize: 22 }}>
              ${current.price}
            </span>
            <Button onClick={() => dispatch(addToCart(current))}>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
