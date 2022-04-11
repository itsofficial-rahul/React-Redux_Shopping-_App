import logo from "./logo.svg";
import "./App.css";
import { store } from "./Store";
import { Provider } from "react-redux";
import ProductListing from "./ProductListing";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <div className="Shop_Name">
            <h1>Redux shop</h1>
            <Cart />
          </div>

          <Routes>
            <Route path="/" element={<ProductListing></ProductListing>} />
            <Route element={<ProductDetails />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
