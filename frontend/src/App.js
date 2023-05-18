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
import Term from "./components/Term";
import Policy from "./components/policy";
import Safety from "./components/Safety";
import Intellectual from "./components/Intellectual";
import Chat from "./components/Chat";

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
          <Route path="/term" element={<Term />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/intellectual" element={<Intellectual />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Auth0Provider>
    </div>
  );
}

export default App;
