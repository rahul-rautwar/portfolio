import React from "react";
import { Footer } from "./Footer";
import { Profile } from "./Profile";
import "./Home.css";
import { Header } from "./Header";

export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};
