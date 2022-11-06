import React from "react";
import "./CartEmptyState.css";

const CartEmptyState = () => {
  return (
    <div className="cart-empty-state">
      <img
        src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
        alt="Empty Cart Icon"
      />
      <div className="cart-empty-state__title">Your shopping cart is empty</div>
      <div className="cart-empty-state__text">
        Use the catalog to add products
      </div>
    </div>
  );
};

export default CartEmptyState;
