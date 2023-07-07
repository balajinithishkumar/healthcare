import React from "react";
import Itmes from "./Itmes";
import "./style/shop.css";
function Shop() {
  var data = [
    {
      imag: "products.jpg",
      product_details: "Blood Glucometer",
      price: "230",
      color: "rgb(218, 247, 200)",
    },
    {
      imag: "product2.jpg",

      product_details: "Digital Glucose Meter",
      price: "230",
      color: "rgb(255, 214, 197)",
    },
    {
      imag: "produt3.jpg",

      product_details: "Glucometer kits to check your blood",
      price: "230",
      color: "rgb(224, 251, 233)",
    },
    {
      imag: "product5.webp",

      product_details: "jkbgkdfj",
      price: "230",
      color: "rgb(248, 216, 216)",
    },
    {
      imag: "produt6.jpg",
      product_details: "jkbgkdfj",
      price: "230",
      color: " rgb(232, 216, 251)",
    },
    {
      imag: "produt7.jpg",

      product_details: "jkbgkdfj",
      price: "230",
      color: " rgb(243, 220, 187)",
    },
    {
      imag: "produt8.jpg",

      product_details: "jkbgkdfj",
      price: "230",
      color: "rgb(232, 242, 242)",
    },
    {
      imag: "product9.jpg",

      product_details: "jkbgkdfj",
      price: "230",
      color: "rgb(218, 247, 200)",
    },
  ];
  return (
    <div className="shop">
      <div className="S_header">
        <h1>Shop</h1>
      </div>
      <div className="shop_items">
        {data.map((d) => (
          <Itmes
            imag={d.imag}
            price={d.price}
            color={d.color}
            product_details={d.product_details}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
