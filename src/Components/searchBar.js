import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import Card from "./card";
import SelectFilters from "./selectFilters";

const SearchBar = () => {
  const [query, setquery] = useState("");
  const [images, setImages] = useState(null);
  const { fetchData } = useFetch();

  const handleSearch = async (color, orient) => {
    if (query == "") {
      alert("Please enter an input");
    } else {
      const dataArray = await fetchData(query, color, orient);
      setImages(dataArray);
    }
  };

  return (
    <>
      <div id="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setquery(e.target.value);
          }}
          placeholder="Search here... "
        />
        <button
          id="focus-button"
          onClick={() => {
            handleSearch("");
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div>
        {images && (
          <>
            <SelectFilters handleSearch={handleSearch} />
            <Card images={images} />
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
