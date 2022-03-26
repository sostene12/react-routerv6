import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [cartIsEmpty] = useState(false);

  // annimation framer state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div>
                <h1>Test in line</h1>
                <p>Successflly tested</p>
              </div>
            }
          />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? (
                <Navigate to="/products" />
              ) : (
                <div>
                  <h2>Your can chose the method to pay</h2>
                </div>
              )
            }
          />
        </Routes>
      </BrowserRouter>
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        className="card"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              blanditiis impedit est ad labore dolor laboriosam dicta inventore
              minima magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nisi.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
