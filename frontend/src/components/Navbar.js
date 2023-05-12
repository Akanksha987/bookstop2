import React, { useState, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./css/Navbar.css";
import logoImg from "../images/B.png";
import books from "../images/cover.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [arrayLength, setArrayLength] = useState(cart.length);
  const { user } = useAuth0();
  const apiUrl = process.env.REACT_APP_CART;
  let values = {};
  if (user) values = { email: user.email };

  useEffect(() => {
    const fetchData = async () => {
      const userEmail = values.email;
      const response = await fetch(`${apiUrl}/${userEmail}`);
      const data = await response.json();
      setCart(data.userCart);
      setArrayLength(data.userCart.length);
    };
    fetchData();
  }, [values]);
 

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    // Main divison of navabar
    <nav className="navbar_main" id="navbar">
      <div className=" navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          {/* Back link on the logo to the home page */}
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" className="logo" />
          </Link>

          {/* hamburger button for the scroll down menu - Mobile Version */}
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        {/* Division for the scroll menu displayed after clicking hanburger icon - Mobile Version */}
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <div className="floating-nav">
            <CustomLink to="/home">
              <button className="navigate-around-buttons">Home</button>
            </CustomLink>
            <CustomLink to="/book">
              <button className="navigate-around-buttons">Books</button>
            </CustomLink>
            <CustomLink to="/cart">
              <button className="navigate-around-buttons">
                Cart
                <span
                  style={{
                    backgroundColor: "#eb8484",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginLeft: "5%",
                    padding: "0 5% ",
                  }}
                >
                  {arrayLength}
                </span>
              </button>
            </CustomLink>
            <CustomLink to="/sell">
              <button className="navigate-around-buttons">Add Book</button>
            </CustomLink>
            {isAuthenticated ? (
              <>
                <button
                  onClick={logout}
                  className="navigate-around-buttons buttons"
                >
                  Log Out
                </button>
              </>
            ) : (
              <button
                onClick={loginWithRedirect}
                className="navigate-around-buttons buttons"
              >
                Sign up
              </button>
            )}
          </div>

          {/* Dision for image of books */}
          <div>
            <img id="image-div" src={books} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
export default Navbar;
