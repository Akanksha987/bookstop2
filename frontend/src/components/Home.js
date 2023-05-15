import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import "./css/Home.css";
import aboutImg from "../images/6897212-removebg-preview.png";
const Home = () => {
  return (
    <div className="home-div">
      {/* Division of tagline */}
      <div className="header-content flex flex-c text-center text-black">
        <p className="header-text">
          "Welcome to "Bookstop" - Here you can find books and also contact your
          seniors"
        </p>
      </div>
      {/* About us division */}
      <div>
        <div className="about-content">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <p className="about-text">
            <h2>About BookStop</h2>
            BookStop is a website which is made for the college students who
            have to buy academic books and are useless after semester or the
            people having the similar book doesn't require any more. This
            website will help seniors and juniors as in this website seniors can
            upload thier book which are of no need and juniors can by them. It
            is a direct interaction of seniors and juniors for purchasing or
            selling of books.
          </p>
        </div>
      </div>
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default Home;
