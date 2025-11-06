import React, { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Product from "./components/Product/Product";
import ProductId from "./components/Product/ProductId";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Cart/Payment";
import Correctly from "./pages/Cart/Correctly";
import Luxury from "./components/Luxury/Luxury";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Location from "./pages/Location/Location";
import Admin from "./pages/Admin/Admin";
import Market from "./pages/Market/Market";
import Stream from "./pages/Stream/Stream";
import Statistic from "./pages/Statistic/Statistic";
import Pay from "./pages/Pay/Pay";
import Request from "./pages/Request/Request";
import Contest from "./pages/Contest/Contest";
import Target from "./pages/Target/Target";
export const AuthContext = createContext();
function App() {
  const isAdmin = true; // bu token yoki state orqali aniqlanadi

  const [user, setUser] = useState(null);
  useEffect(() => {
    const saqla = localStorage.getItem("user");
    if (saqla) {
      setUser(JSON.parse(saqla));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <Categories />
              <Product />
              <Luxury />
              <Footer />
            </div>
          }
        />
        <Route path="/productid" element={<ProductId />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/correctly" element={<Correctly />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/location" element={<Location />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/market" element={<Market />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/contest" element={<Contest/>} />
        <Route path="/target" element={<Target/>} />





      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
