import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./Action";
import ProductContainer from "./ProductContainer";
import ProductDetails from "./ProductDetails";
import "./App.css";
function ProductListing() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const url = "https://fakestoreapi.com/products";
  const fetchApi = async () => {
    const data = await fetch(url);
    const data1 = await data.json();
    setloading(false);
    console.log(data1);
    dispatch(setProduct(data1));
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <ProductContainer />}</div>;
}

export default ProductListing;
