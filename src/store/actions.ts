export const setActiveButton = (value: string) => {
  return { type: "SET_ACTIVE_BUTTON", payload: value };
};

interface Category {
  label: string;
  value: string;
}

export const setCategories = (categories: Category[]) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const setSearchValue = (value: string) => {
  return {
    type: "SET_SEARCH_VALUE",
    payload: value,
  };
};

export const setSearchProducts = (searchProductIds: number[]) => {
  return {
    type: "SET_SEARCH_PRODUCTS",
    payload: searchProductIds,
  };
};

export const setProducts = (value: []) => {
  return { type: "SET_PRODUCTS", payload: value };
};

export const setLoading = (value: boolean) => {
  return { type: "SET_LOADING", payload: value };
};

export const setError = (value: string | null) => {
  return { type: "SET_ERROR", payload: value };
};

export const setFavoriteProduct = (id: number) => {
  return { type: "SET_FAVORITE_PRODUCT", payload: id };
};

export const removeFavoriteProduct = (id: number) => {
  return { type: "REMOVE_FAVORITE_PRODUCT", payload: id };
};
