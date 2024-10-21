import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteProduct, removeFavoriteProduct } from "../store/actions";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
}

const FavoriteButton: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state: any) => state.favorite);
  const isActive = favoriteIds.includes(product.id);

  const handleClick = (id: number) => {
    if (favoriteIds.includes(id)) {
      dispatch(removeFavoriteProduct(id));
    } else {
      dispatch(setFavoriteProduct(id));
    }
  };

  return (
    <button
      onClick={() => handleClick(product.id)}
      className={`favorite-button ${isActive ? "favorite-button-active" : ""}`}
    ></button>
  );
};
export default FavoriteButton;
