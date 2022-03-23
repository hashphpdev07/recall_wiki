import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const Searchbar = ({
  placeholderText: placeholderText,
  getSearchedNews: getSearchedNews,
}) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchText.length > 0) {
        getSearchedNews(searchText);
      }
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);
  return (
    <div className="search">
      <input
        className="search-bar"
        placeholder={placeholderText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
