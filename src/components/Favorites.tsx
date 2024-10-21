import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: [];
  percent: string;
  category: [];
}

const Favorites: React.FC = () => {
  const products = useSelector((state: any) => state.products) as Product[];
  const favoritList = useSelector((state: any) => state.favorite);
  const productsFavorites = products.filter((object) =>
    favoritList.includes(object.id)
  );

  if (!productsFavorites) {
    return <p>Пусто...</p>;
  }

  return (
    <div className="product-list container content-container">
      {productsFavorites.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Favorites;
