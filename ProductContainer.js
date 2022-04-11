import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedproduct } from "./Action";
import ProductDetails from "./ProductDetails";
import "./App.css";
function ProductContainer() {
  const data = useSelector((state) => state.reducer.products);

  const dispatch = useDispatch();
  return (
    <div>
      {data.map((alldata, i) => {
        const { id, title, price, image, category, description } = alldata;
        return (
          <div className="Product_UI" key={i}>
            <h4 className="Id">{id}</h4>
            <img src={image} width="150px" height="150px"></img>
            <h6>{title}</h6>
            <h3>Price $ :{price}</h3>
            <button
              className="Btn"
              onClick={() => dispatch(selectedproduct(alldata))}
            >
              ADD_TO_CART
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductContainer;
