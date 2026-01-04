import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Filter.scss";
function Filter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 1000000,
    bedroom: searchParams.get("bedroom") || 1,
    property: searchParams.get("property") || "",
  })
// http://localhost:5173/list?type=rent&city=Kathmandu&minPrice=1111&maxPrice=1111111&property=
// http://localhost:5173/list?type=rent&city=Kathmandu&minPrice=1111&maxPrice=1111111&bedroom=1&property=
  const handleChange = (e)=> {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    })
  }

  const handleFilter = ()=> {
    setSearchParams(query)
  }
  return (
    <div className="filter">
      <h1>
        Search results for <b>{query.city}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" placeholder="City Location" onChange={handleChange} defaultValue={query.city} />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
            <option value="">Select Type</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property" onChange={handleChange} defaultValue={query.property}>
            <option value="">Select Property</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" placeholder="any" onChange={handleChange} defaultValue={query.minPrice}/>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" placeholder="any" onChange={handleChange} defaultValue={query.maxPrice}/>
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedrooms</label>
          <input type="number" id="bedroom" placeholder="any" onChange={handleChange} defaultValue={query.bedroom}/>
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
