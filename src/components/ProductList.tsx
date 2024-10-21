import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading, setError } from "../store/actions";
import ProductItem from "./ProductItem";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
  ingredients: [];
  percent: string;
  category: { label: string; value: string }[];
}

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products) as Product[];
  const loading = useSelector((state: any) => state.loading);
  const error = useSelector((state: any) => state.error);

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const products = response.data;
        dispatch(setProducts(products));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError("ошибка"));
        dispatch(setLoading(false));
      }
    };
    fetchProducts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container container-info">
        <div>Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container container-info">
        <div>{error}...</div>
      </div>
    );
  }

  return (
    <div className="product-list container content-container">
      {products.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductList;
