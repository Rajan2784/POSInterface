import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Receipt from "./pages/Receipt";
import PaymentPage from "./pages/PaymentPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
