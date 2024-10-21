import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import FooterSearch from "./components/FooterSearch";
import FooterFavorites from "./components/FooterFavorites";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import routes from "./routes";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.pathHomePage()}
            element={
              <>
                <Header />
                <ProductList />
                <Footer />
              </>
            }
          />
          <Route
            path={routes.pathSearchPage()}
            element={
              <>
                <Header />
                <Search />
                <FooterSearch />
              </>
            }
          />
          <Route
            path={routes.pathFavoritesPage()}
            element={
              <>
                <Header />
                <Favorites />
                <FooterFavorites />
              </>
            }
          />
          <Route
            path={routes.pathProduct(":id")}
            element={
              <>
                <ProductCard />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
