import React from "react";
import Button from "../../../components/Button.jsx";
import { changeQty, removeFromCart } from "../model/cartSlice.js";
import { useAppDispatch } from "../../../app/hooks.js";

export default function CartItem({ item }) {
  const dispatch = useAppDispatch();
  return (
    <tr>
      <td style={{ width: 60 }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: 50, height: 50, objectFit: "contain" }}
        />
      </td>
      <td>{item.title}</td>
      <td className="price">${item.price}</td>
      <td>
        <input
          className="input"
          value={item.qty}
          onChange={(e) =>
            dispatch(changeQty({ id: item.id, qty: e.target.value }))
          }
        />
      </td>
      <td className="price">${(item.qty * item.price).toFixed(2)}</td>
      <td>
        <Button onClick={() => dispatch(removeFromCart(item.id))}>✕</Button>
      </td>
    </tr>
  );
}
