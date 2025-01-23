import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/product-details">
          <ProductDetails />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/team">
          <TeamPage />
        </Route>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Switch>
    </div>
  );
}

export default App;
