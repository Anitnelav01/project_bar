import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../icon/Vector.svg";
import routes from "../routes";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Link to={routes.pathFavoritesPage()}>
          <button className="footer__favorites-button">Избранные</button>
        </Link>
        <button className="footer__search">
          <Link to={routes.pathSearchPage()}>
            <img
              className="footer__search-icon"
              src={SearchIcon}
              alt="search"
              title="search"
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Footer;
