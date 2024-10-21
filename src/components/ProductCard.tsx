import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteButton from "./FavoriteButton";
import routes from "../routes";

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: Ingredient[];
  description: string;
}

const ProductCard: React.FC = () => {
  const { id } = useParams();
  const products = useSelector((state: any) => state.products) as Product[];
  const serverUrl = "http://localhost:5000/";
  const productId = id !== undefined ? parseInt(id, 10) : null; ///TypeScript не может гарантировать, что id всегда будет строкой, поэтому он выдает ошибку
  const productItem = products.find((product) => product.id === productId);

  if (!productItem) {
    return (
      <div className="c container-info">
        <div>Product not found</div>
      </div>
    );
  }

  const ingredients = productItem.ingredients;
  const descriptionProduct = productItem.description;
  return (
    <div>
      <Link to={routes.pathHomePage()}>
        <button className="ingredients-card__button"></button>
      </Link>
      <img
        className="product-card-ingredients__img"
        src={`${serverUrl}${productItem.picture}`}
        alt={productItem.title}
      />
      <div className="ingredients-card">
        <div className="ingredients-card__container">
          <div className="ingredients__favorite-button">
            <FavoriteButton product={productItem} />
          </div>
          <div className="ingredients__description">
            <h4 className="ingredients__description-title">
              {productItem.title}
            </h4>
            <p className="ingredients__description-product">
              {productItem.subtitle}
            </p>
          </div>
          <div className="ingredients__ingredients">
            <div className="ingredients-title">Ингредиенты</div>
            <div>
              {ingredients.map((item, index) => (
                <div className="ingredients-list" key={index}>
                  <span className="ingredient-name">{item.name}</span>
                  <span className="dots"></span>
                  <span className="ingredient-amount">
                    {item.amount} {item.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="ingredients__preparation-steps">
            <h4 className="ingredients__preparation-steps-title">
              Как готовить
            </h4>
            <div className="ingredients__preparation-steps-string">
              {descriptionProduct.split(".").map((step, index) => (
                <p key={index}>{step.trim()}.</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
