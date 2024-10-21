import * as React from "react";
import FavoriteButton from "./FavoriteButton";
import { Link } from "react-router-dom";
import routes from "../routes";
import { useSelector } from "react-redux";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: [];
  percent: string;
  category: { label: string; value: string }[];
}

const ProductItem: React.FC<{ item: Product }> = ({ item }) => {
  const serverUrl = "http://localhost:5000/";
  const selectedCategory = useSelector((state: any) => state.activeButton);

  const isProductInSelectedCategory = item.category.some(
    (category) => category.value === selectedCategory
  );

  if (!isProductInSelectedCategory) {
    return null;
  }

  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={`${serverUrl}${item.picture}`}
        alt=""
      />
      <div className="product-card__block-percent">
        <span className="alcohol-percentage">{item.percent}</span>
        <span className="alcohol-label">Алкоголь</span>
      </div>
      <div className="product-card__description">
        <Link
          className="product-card__description-title"
          to={routes.pathProduct(item.id)}
        >
          {item.title}
        </Link>
        <p className="product-card__description-product">{item.subtitle}</p>
      </div>
      <FavoriteButton product={item} />
    </div>
  );
};

export default ProductItem;
