import React from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const onDeleteFromCart = (id) => {
    setCart((cart) => {
      return cart.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      <div className="cart-items">
        {cart.map((item) => {
          return (
            <div className="item" key={item.id}>
              <div className="item-content">
                <div className="item-title">{item.title}</div>
                <div className="item-counter">{`${item.cost}$ × ${2}`}</div>
              </div>
              <div
                className="item-delete-btn"
                onClick={() => onDeleteFromCart(item.id)}
              >
                ✕
              </div>
            </div>
          );
        })}
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
