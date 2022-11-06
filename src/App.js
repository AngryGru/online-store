import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Cart from "./components/Cart/Cart";
import { MOCK_DATA } from "./common/mock-data";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <CardList mock_data={MOCK_DATA} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
