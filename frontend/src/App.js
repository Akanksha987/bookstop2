import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Sell from "./components/Sell";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <div>
      <Auth0Provider
        domain="dev-kce2a8b1cexzb43y.us.auth0.com"
        clientId="LY950lpDF68jgnJEGIWUtUaMunlpTeFs"
      >
        {/* routes for the pages */}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Auth0Provider>
    </div>
  );
}

export default App;
