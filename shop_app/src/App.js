import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const addToCart = async (productId,quantity) => {
    const response = await commerce.cart.add(productId,quantity);
    setCart(response.cart)
  };
  const updateCart = async () => {
    const response = await commerce.cart.update();
  };
  const deleteCart = async () => {
    const response = await commerce.cart.empty;
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  console.log("ksd", products);
  console.log("jjj", cart);
  return (
    <div>
      <Navbar />
      <Products products={products} addCart={addToCart}/>
    </div>
  );
};

export default App;
