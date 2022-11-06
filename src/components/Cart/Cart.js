import React, { useState } from "react";
import CartEmptyState from "../CartEmptyState/CartEmptyState";
import CartItem from "../CartItem/CartItem";
import Modal from "../Modal/Modal";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [modalActive, setModalActive] = useState(false);
  const totalCount = cart.reduce((acc, cur) => {
    return acc + cur.total_cost;
  }, 0);
  return (
    <div className="cart">
      <div className="cart-header">Cart</div>
      <div className="cart-items">
        {cart.length > 0 ? (
          <CartItem cart={cart} setCart={setCart} />
        ) : (
          <CartEmptyState />
        )}
      </div>
      <div className="cart-total">
        <p>Total:</p>
        <p>{`${totalCount}$`}</p>
      </div>
      <button
        className="cart-checkout"
        onClick={() => {
          setModalActive(true);
          setCart([]);
        }}
      >
        CHECKOUT
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="content checkout-modal">
          Thank you for the purchase!
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
