import React, { Component } from "react";
import { Routes, Route } from "react-router";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }
}

export default App;
