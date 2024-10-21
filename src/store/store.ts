import { configureStore } from "@reduxjs/toolkit";

interface State {
  activeButton: string;
  searchValue: string;
  searchProducts: number[];
  products: [];
  loading: boolean;
  error: string | null;
  favorite: number[];
  category: [];
}

const initialState: State = {
  activeButton: "",
  searchValue: "",
  searchProducts: [],
  products: [],
  loading: false,
  error: null,
  favorite: [],
  category: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_ACTIVE_BUTTON":
      return { ...state, activeButton: action.payload };
    case "SET_CATEGORIES":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "SET_SEARCH_PRODUCTS":
      console.log(state.searchProducts);
      return { ...state, searchProducts: action.payload as number[] };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_FAVORITE_PRODUCT":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "REMOVE_FAVORITE_PRODUCT":
      return {
        ...state,
        favorite: state.favorite.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
