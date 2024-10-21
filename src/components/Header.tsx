import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import headerLogo from "../icon/headerLogo.svg";
import routes from "../routes";

const Header = () => {
  const location = useLocation();

  let title;
  switch (location.pathname) {
    case "/":
      title = "Главная";
      break;
    case "/search":
      title = "Поиск";
      break;
    case "/favorites":
      title = "Избранные";
      break;
  }

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("ru-RU", { month: "long" });
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <header className="container">
      <div className="header__container">
        <div className="header__block">
          <h1>{title}</h1>
          <div className="header__date">{formattedDate}</div>
        </div>
        <div>
          <Link to={routes.pathHomePage()}>
            <img className="header__logo" src={headerLogo} alt="logo"></img>
          </Link>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
