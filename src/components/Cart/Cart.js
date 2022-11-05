import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      <div className="cart-items">
        <div className="item">
          <div className="item-content">
            <div className="item-title">HOGWARTS LEGACY</div>
            <div className="item-counter">{`${92}$ × ${2}`}</div>
          </div>
          <div className="item-delete-btn">✕</div>
        </div>
        <div className="item">
          <div className="item-title">Item title</div>
          <div className="item-counter">{`${50}$ × ${2}`}</div>
        </div>
      </div>
      <div className="cart-total">
        <p>Total:</p>
        <p>{`${250}$`}</p>
      </div>
      <button className="cart-checkout">CHECKOUT</button>
    </div>
  );
};

export default Cart;
