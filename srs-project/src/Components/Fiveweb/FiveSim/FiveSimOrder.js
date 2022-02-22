import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./FiveSim.css";

const FiveSimOrder = () => {
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState([]);
  const [field, setField] = useState([]);
  const [reverse, setReverse] = useState([]);

  const cate = [
    { name: "America", value: "1" },
    { name: "Bangladesh", value: "2" },
    { name: "Pakistan", value: "3" },
    { name: "India", value: "4" },
    { name: "South Africa", value: "5" },
  ];

  const inp = [
    { name: "Adidas", value: "1" },
    { name: "Amazon", value: "2" },
    { name: "Fiverr", value: "3" },
    { name: "Bata", value: "4" },
    { name: "Galaxy", value: "5" },
  ];

  const fil = [
    { name: "America", value: "1" },
    { name: "Bangladesh", value: "2" },
    { name: "Pakistan", value: "3" },
    { name: "India", value: "4" },
    { name: "South Africa", value: "5" },
  ];

  const reve = [
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
              options={cate}
              value={category}
              onChange={setCategory}
              search
              filterOptions={fuzzySearch}
              placeholder="Category"
            />
          </div>

          <div className="search-input-btn">
            <SelectSearch
              options={inp}
              value={input}
              onChange={setInput}
              search
              filterOptions={fuzzySearch}
              placeholder="Input Number"
            />
          </div>

          <div className="search-input-btn">
            <SelectSearch
              options={fil}
              value={field}
              onChange={setField}
              search
              filterOptions={fuzzySearch}
              placeholder="Field"
            />
          </div>

          <div className="search-input-btn">
            <SelectSearch
              options={reve}
              value={reverse}
              onChange={setReverse}
              search
              filterOptions={fuzzySearch}
              placeholder="Reverse"
            />
          </div>
        </div>

        <div className="product-data-table">
          <table class="table">
            <thead>
              <th>Id</th>
              <th>Phone</th>
              <th>Operator</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Exp. Date</th>
              <th>Create Date</th>
              <th>Country</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>
              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Phone">+880 1521404561</td>
                <td data-label="Operator">Virtual12</td>
                <td data-label="Product">Adidas</td>
                <td data-label="Price">$100</td>
                <td data-label="Status">paid</td>
                <td data-label="Exp. Date">12/12/2021</td>
                <td data-label="Create Date">11/11/2020</td>
                <td data-label="Country">America</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FiveSimOrder;
