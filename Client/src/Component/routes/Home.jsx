import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Main from "../Main/Home/Home";
import Branding from "../Main/Branding/Branding";
import Wrapper from "../Main/Wrapper/Wrapper";
import Blog from "../Main/Blog/Blog";
import About from "../Main/About/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Branding />
      <Blog />
      <Wrapper />
      <About />
      <Footer />
    </>
  );
};

export default Home;
