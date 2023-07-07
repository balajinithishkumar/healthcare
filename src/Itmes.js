import React from "react";
import "./style/items.css";
function Itmes({ imag, color, product_details, price }) {
  return (
    <div className="items">
      <div className="items_1" style={{ backgroundColor: color }}>
        <img src={imag} />
        <div className="button">
          <button>Add </button>
        </div>
      </div>
      <div className="items_2">
        <p>{product_details} </p>
        <price>Rs {price}</price>
      </div>
      <div className="details">
        <p></p>
      </div>
    </div>
  );
}

export default Itmes;
