import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductsListing from "./Pages/ProductsListing";
import ProductDetails from "./Pages/ProductDetails";
import ProductsNavBar from "./Components/ProductsNavBar";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1  }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/products"
        element={
          <>
            <ProductsNavBar />
            <ProductsListing />
          </>
        }
      />
      <Route
        path="/products/:id"
        element={
          <>
            <ProductsNavBar />
            <ProductDetails cart={cart} addToCart={addToCart} />
          </>
        }
      />
      <Route
        path="/products/cart"
        element={
          <>
            <ProductsNavBar />
            <Cart cart={cart} setCart={setCart} selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
          </>
        }
      />
      <Route
        path="/products/checkout"
        element={
          <>
            <ProductsNavBar />
            <Checkout cart={cart} selectedItems={selectedItems} />
          </>
        }
      />
    </Routes>
  );
};

export default App;
