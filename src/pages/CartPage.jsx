import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks.js";
import CartItem from "../features/cart/components/CartItem.jsx";
import Button from "../components/Button.jsx";
import { clearCart } from "../features/cart/model/cartSlice.js";

export default function CartPage() {
  const { items } = useAppSelector((s) => s.cart);
  const dispatch = useAppDispatch();
  const total = items.reduce((s, i) => s + i.qty * i.price, 0).toFixed(2);

  if (items.length === 0) return <p className="muted">Ваш кошик порожній.</p>;

  return (
    <section className="card">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <CartItem key={i.id} item={i} />
          ))}
        </tbody>
      </table>
      <div className="row" style={{ marginTop: 10 }}>
        <strong>
          Total: <span className="price">${total}</span>
        </strong>
        <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </section>
  );
}
