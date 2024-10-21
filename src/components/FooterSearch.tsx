import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSearchProducts } from "../store/actions";
import clearInput from "../icon/delite.svg";

interface FooterSearchProps {
  setSearchValue?: (value: string) => void;
}

interface Product {
  id: number;
  title: string;
  subtitle: string;
}

const FooterSearch: React.FC<FooterSearchProps> = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products) as Product[];
  const [searchValue, setSearchValueLocal] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchValueLocal(inputValue);
    dispatch(setSearchValue(inputValue));

    const filteredProductIds = products
      .filter((product) => {
        const productName = product.title.toLowerCase();
        return productName.startsWith(inputValue);
      })
      .map((product) => product.id);

    if (filteredProductIds.length === 0) {
      dispatch(setSearchProducts([]));
    } else {
      dispatch(setSearchProducts(filteredProductIds));
    }
  };

  const handleClearSearch = () => {
    setSearchValueLocal("");
    dispatch(setSearchValue(""));
    dispatch(setSearchProducts([]));
  };

  return (
    <div className="footer">
      <div className="footer__container">
        <input
          className="footer__search-input"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button className="footer__search-clear" onClick={handleClearSearch}>
          <img
            className="footer__search-clear-img"
            src={clearInput}
            alt="logo"
          />
        </button>
      </div>
    </div>
  );
};

export default FooterSearch;
