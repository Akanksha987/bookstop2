import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import Sell from "./components/Sell";
import BookList from "./components/BookList";
import { Auth0Provider } from "@auth0/auth0-react";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div>
      <Auth0Provider
        clientId={process.env.REACT_APP_CLIENT_ID}
        domain={process.env.REACT_APP_DOMAIN}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {/* routes for the pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
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
