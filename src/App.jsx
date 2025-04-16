import { Bounce, toast, ToastContainer } from "react-toastify";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/LogIn";
import { AuthProvider } from "./authContext/AuthContext";
import ScrollToTop from "./ScrollTop";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCart } from "./store/actions/shoppingCartActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const persistedCartString = localStorage.getItem("cartItems");
    if (persistedCartString) {
      try {
        const initialCart = JSON.parse(persistedCartString);
        dispatch(setCart(initialCart));
      } catch (error) {
        console.error(
          "Local Storage'dan sepet verilerini yüklerken hata oluştu:",
          error
        );
      }
    }
  }, [dispatch]);

  return (
    <AuthProvider>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
      <div className="">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route
            exact
            path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
          >
            <ProductDetails />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
