import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton, setCategories } from "../store/actions";

interface Category {
  label: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: string[];
  description: string;
  category: Category[];
}

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const activeButton = useSelector((state: any) => state.activeButton);
  const products = useSelector((state: any) => state.products) as Product[];

  const categories: Category[] = products.reduce<Category[]>((acc, product) => {
    product.category.forEach((cat) => {
      if (!acc.find((item) => item.value === cat.value)) {
        acc.push(cat);
      }
    });
    return acc;
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      dispatch(setCategories(categories));
      if (!activeButton) {
        dispatch(setActiveButton(categories[0].value));
      }
    }
  }, [categories, dispatch, activeButton]);

  const handleClick = (value: string) => {
    dispatch(setActiveButton(value));
  };

  return (
    <div className="nav">
      {categories.map((categoryItem) => (
        <button
          className={`${
            categoryItem.value === activeButton ? "nav__item--active" : ""
          } nav__item`}
          key={categoryItem.value}
          onClick={() => handleClick(categoryItem.value)}
        >
          {categoryItem.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
