import React from "react";
import logoFooter from "../assets/icons/footer-logo.svg";
import "../styles/footer.css";

const footer = () => {
  return (
    <div className="footer-div">
      <img src={logoFooter} alt="logo kasa footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default footer;
