import { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="city" placeholder="City" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <Link to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}>
        <button>
          <img src="/search.png" alt="" />
        </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
