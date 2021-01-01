import React from "react";
import Sidebar from "../Sidebar";
import Content from "../Content";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
