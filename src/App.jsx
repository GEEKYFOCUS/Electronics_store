import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Carts from "./pages/Carts";
import Account from "./pages/Account";
import Product from "./pages/Product";
import WishList from "./pages/WishList";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout/:orderId" element={<Checkout />} />
          <Route path="carts" element={<Carts />} />
          <Route path="account" element={<Account />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="category" element={<Category />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
