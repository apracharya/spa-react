import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Base = ({ title = "", children }) => {
  const logo = "./src/assets/respira-logo-main.svg";
  return (
    <div>
      <Navbar logo={logo} />
      <div>{children}</div>

      <Footer logo={logo} />
    </div>
  );
};

export default Base;