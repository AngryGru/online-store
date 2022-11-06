import React from "react";
import "./CartItem.css";

const CartItem = ({ cart, setCart }) => {
  const onDeleteFromCart = (id) => {
    setCart((cart) => {
      return cart.filter((item) => item.id !== id);
    });
  };
  return cart.map((item) => {
    return (
      <div className="item" key={item.id}>
        <div className="item-content">
          <div className="item-title">{item.title}</div>
          <div className="item-counter">{`${item.total_cost}$ × ${item.count}`}</div>
        </div>
        <div
          className="item-delete-btn"
          onClick={() => onDeleteFromCart(item.id)}
        >
          ✕
        </div>
      </div>
    );
  });
};

export default CartItem;
