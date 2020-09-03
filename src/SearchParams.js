import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState(" Seattle , WA");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form action="submit">
        <label htmlFor="location">
          Location
          <input
            type="text"
            name=""
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
