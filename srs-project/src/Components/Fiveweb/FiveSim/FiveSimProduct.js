import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./FiveSim.css";

const FiveSimProduct = () => {
  const [country, setCountry] = useState([]);
  const [operator, setOperator] = useState([]);

  //   const options = [
  //     {
  //       name: "Annie Cruz",
  //       value: "annie.cruz",
  //       photo: "https://randomuser.me/api/portraits/women/60.jpg",
  //     },
  //     {
  //       name: "Eli Shelton",
  //       disabled: true,
  //       value: "eli.shelton",
  //       photo: "https://randomuser.me/api/portraits/men/7.jpg",
  //     },
  //     {
  //       name: "Loretta Rogers",
  //       value: "loretta.rogers",
  //       photo: "https://randomuser.me/api/portraits/women/51.jpg",
  //     },
  //     {
  //       name: "Lloyd Fisher",
  //       value: "lloyd.fisher",
  //       photo: "https://randomuser.me/api/portraits/men/34.jpg",
  //     },
  //     {
  //       name: "Tiffany Gonzales",
  //       value: "tiffany.gonzales",
  //       photo: "https://randomuser.me/api/portraits/women/71.jpg",
  //     },
  //   ];

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
              <th>S.No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="S.No">1</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Price">$34</td>
                <td data-label="Quantity">50</td>
              </tr>

              <tr>
                <td data-label="S.No">4</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Price">$34</td>
                <td data-label="Quantity">50</td>
              </tr>

              <tr>
                <td data-label="S.No">4</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Price">$34</td>
                <td data-label="Quantity">50</td>
              </tr>

              <tr>
                <td data-label="S.No">4</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Price">$34</td>
                <td data-label="Quantity">50</td>
              </tr>

              <tr>
                <td data-label="S.No">4</td>
                <td data-label="Name">Dinesh</td>
                <td data-label="Price">$34</td>
                <td data-label="Quantity">50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FiveSimProduct;
