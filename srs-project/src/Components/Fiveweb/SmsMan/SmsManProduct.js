import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./SmsMan.css";

const SmsManProduct = () => {
  const [country, setCountry] = useState([]);
  const [operator, setOperator] = useState([]);

  const desh = [
    { name: "America", value: "1" },
    { name: "Bangladesh", value: "2" },
    { name: "Pakistan", value: "3" },
    { name: "India", value: "4" },
    { name: "South Africa", value: "5" },
  ];

  const company = [
    { name: "Adidas", value: "1" },
    { name: "Amazon", value: "2" },
    { name: "Fiverr", value: "3" },
    { name: "Bata", value: "4" },
    { name: "Galaxy", value: "5" },
  ];

  return (
    <>
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
            <SelectSearch
              options={company}
              value={operator}
              onChange={setOperator}
              search
              filterOptions={fuzzySearch}
              placeholder="Search Operator"
            />
          </div>
        </div>

        <div className="product-data-table">
          <table class="table">
            <thead>
              <th>ID</th>
              <th>Service Name</th>
              <th>Cost</th>
              <th>Count</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="ID">1</td>
                <td data-label="Service Name">Dinesh</td>
                <td data-label="Cost">$34</td>
                <td data-label="Count">50</td>
              </tr>

              <tr>
                <td data-label="ID">1</td>
                <td data-label="Service Name">Dinesh</td>
                <td data-label="Cost">$34</td>
                <td data-label="Count">50</td>
              </tr>

              <tr>
                <td data-label="ID">1</td>
                <td data-label="Service Name">Dinesh</td>
                <td data-label="Cost">$34</td>
                <td data-label="Count">50</td>
              </tr>

              <tr>
                <td data-label="ID">1</td>
                <td data-label="Service Name">Dinesh</td>
                <td data-label="Cost">$34</td>
                <td data-label="Count">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SmsManProduct;
