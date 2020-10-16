import React from "react";
import ProductContextProvider from "./context/ProductContext";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function App() {
  return (
    <ProductContextProvider>
          <div className="container-fluid">
              <Header />
              <ProductContainer/>
          </div>
    </ProductContextProvider>
  );
}
