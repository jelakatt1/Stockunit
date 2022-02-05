import React, { useState } from "react";
import "./Product.css";
import FiveSimProduct from "../../Components/Fiveweb/FiveSim/FiveSimProduct";
import SmsManProduct from "../../Components/Fiveweb/SmsMan/SmsManProduct";
import PavPinsProduct from "../../Components/Fiveweb/PvaPins/PvaPinsProduct";
import SmsActiveRuProduct from "../../Components/Fiveweb/SmsAtiveRu/SmsActiveRuProduct";

const Product = () => {
  const [showTable, setShowTable] = useState(" ");

  return (
    <>
      <section>
        <div className="product-web-btn">
          <button onClick={() => setShowTable("smsCodesProduct")}>
            SMSCODES.IO
          </button>
          <button onClick={() => setShowTable("fiveSimProduct")}>
            5 SIM.NET
          </button>
          <button onClick={() => setShowTable("pavPinsProduct")}>
            PVAPINS.COM
          </button>
          <button onClick={() => setShowTable("smsActiveProduct")}>
            SMS-ACTIVE.RU
          </button>
          <button onClick={() => setShowTable("smsManProduct")}>
            SMS-MAN.COM
          </button>
        </div>
        {showTable === "fiveSimProduct" ? <FiveSimProduct /> : null}
        {showTable === "pavPinsProduct" ? <PavPinsProduct /> : null}
        {showTable === "smsActiveProduct" ? <SmsActiveRuProduct /> : null}
        {showTable === "smsManProduct" ? <SmsManProduct /> : null}
      </section>
    </>
  );
};

export default Product;
