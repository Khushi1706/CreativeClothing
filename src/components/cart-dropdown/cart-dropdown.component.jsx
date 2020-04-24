import React from "react";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-buttton.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT PAGE</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
