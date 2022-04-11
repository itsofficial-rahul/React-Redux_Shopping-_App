import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const data = useSelector((state) => state.purchase_Reducer.productsItem);
  console.log(data);
  return (
    <div className="Cart_of_APPLication">
      <h1>Cart : {data}</h1>
    </div>
  );
}

export default Cart;
