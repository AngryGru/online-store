import "./App.css";
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Cart from "./components/Cart/Cart";
import { MOCK_DATA } from "./common/mock-data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <CardList data={MOCK_DATA} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
