import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./FiveSim.css";

const FiveSimPayment = () => {
  const [input, setInput] = useState([]);
  const [field, setField] = useState([]);
  const [reverse, setReverse] = useState([]);

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
              <th>Provider</th>
              <th>Payment Types</th>
              <th>Amount</th>
              <th>Paid Date</th>
            </thead>
            <tbody>
              <tr>
                <td data-label="Id">118</td>
                <td data-label="Provider">Amber IT</td>
                <td data-label="Payment">b-kash</td>
                <td data-label="Amount">$600</td>
                <td data-label="Paid Date">10/12/2021</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Provider">Amber IT</td>
                <td data-label="Payment">b-kash</td>
                <td data-label="Amount">$600</td>
                <td data-label="Paid Date">10/12/2021</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Provider">Amber IT</td>
                <td data-label="Payment">b-kash</td>
                <td data-label="Amount">$600</td>
                <td data-label="Paid Date">10/12/2021</td>
              </tr>

              <tr>
                <td data-label="Id">118</td>
                <td data-label="Provider">Amber IT</td>
                <td data-label="Payment">b-kash</td>
                <td data-label="Amount">$600</td>
                <td data-label="Paid Date">10/12/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FiveSimPayment;
