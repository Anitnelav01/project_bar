import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import ResultSearch from "../icon/resultSearch.svg";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: [];
  category: [];
  percent: string;
}

const Search: React.FC = () => {
  const products = useSelector((state: any) => state.products) as Product[];
  const searchProductList = useSelector((state: any) => state.searchProducts);
  const productList = products.filter((object) =>
    searchProductList.includes(object.id)
  );

  if (!productList.length) {
    return (
      <div className="container-search">
        <h1 className="search-title">Нет результатов</h1>
        <img
          className="search-result"
          src={ResultSearch}
          alt="Результат поиска"
        />
        <div className="search-message">
          <p className="search-message__desc">Пусто</p>
          <p className="search-message__prompt">Попробуйте изменить запрос</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-list container content-container">
      {productList.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Search;
