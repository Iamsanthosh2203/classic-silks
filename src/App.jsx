import Home from "./pages/Home";
import Productdetails from "./pages/Productdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/productdetails/:itemId"
          element={<Productdetails cart={cart} setCart={setCart} />}
        />
        <Route path="/men" element={<Men />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
