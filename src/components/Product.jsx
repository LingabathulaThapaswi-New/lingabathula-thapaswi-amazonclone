import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Wristband from "./Wristband";
import Alexa from "./Alexa";
import Apple_ipad_pro from "./Apple_ipad_pro";
import Samsung_Monitor from "./Samsung_Monitor";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Wristband />
      </div>
      <div class="product_row d-flex">
        <Alexa />
        <Apple_ipad_pro />
      </div>
      <div class="product_row d-flex">
        <Samsung_Monitor />
      </div>
    </div>
  );
}

export default Product;
