import React from "react";
import "../styles/Error404.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-div">
      <div className="error-div-content">
        <p className="error-number">404</p>
        <p className="error-text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error;
