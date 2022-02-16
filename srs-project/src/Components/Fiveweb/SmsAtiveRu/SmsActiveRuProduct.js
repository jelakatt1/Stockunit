import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./SmsActiveRuProduct.css";

const SmsActiveRuProduct = () => {
  const [country, setCountry] = useState([]);
  const [showPrice, setShowPice] = useState(false);

  const desh = [
    { name: "America", value: "1" },
    { name: "Bangladesh", value: "2" },
    { name: "Pakistan", value: "3" },
    { name: "India", value: "4" },
    { name: "South Africa", value: "5" },
  ];

  return (
    <section className="product-section">
      <div className="search-btn">
        <div className="search-input-btn">
          <SelectSearch
            options={desh}
            value={country}
            onChange={setCountry}
            search
            filterOptions={fuzzySearch}
            placeholder="Search Country"
          />
        </div>

        <div className="search-input-btn">
          <input type="text" placeholder="Operator" />
        </div>
      </div>

      <div className="product-data-table">
        <table class="table">
          <thead>
            <th>Name</th>
            <th>Available</th>
            <th>Quantity</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">Dinesh</td>
              <td data-label="Available">Yes</td>
              <td data-label="Quantity">30</td>
              <td data-label="" className="show-price">
                <button
                  className="show-btn"
                  onClick={() => setShowPice(!showPrice)}
                >
                  Show Price
                </button>
                {showPrice && <p>$500</p>}
              </td>
            </tr>

            <tr>
              <td data-label="Name">Dinesh</td>
              <td data-label="Available">Yes</td>
              <td data-label="Quantity">30</td>
              <td data-label="" className="show-price">
                <button
                  className="show-btn"
                  onClick={() => setShowPice(!showPrice)}
                >
                  Show Price
                </button>
                {showPrice && <p>$500</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SmsActiveRuProduct;
