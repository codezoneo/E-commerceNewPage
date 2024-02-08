import React from "react";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import SearchItem from "./Components/SearchItem";
import Cart from './Components/Cart';
const App = ()=>{
return (
  <>
    <Router>
      <NavBar />
    </Router>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product/:term" element={<SearchItem />} />
      <Route path="/product/:cart" element={<Cart />} />
    </Routes>
  </>
);
}
export default App;
