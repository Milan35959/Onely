import React from "react";
import "./pricef.css";
// import { PricingCard } from "../../utils/Pricing";
import PriceS from "./PriceS";
const PriceF = () => {
  // let result;

  // switch (PricingCard.name) {
  //   case "basic":
  //     result = PricingCard[0];
  //     break;
  //   case "Onely Plus":
  //     result = PricingCard[1];
  //     break;
  //   default:
  //     result = PricingCard[2];
  //     break;
  // }

  return (
    <>
      <div className="ptextbox">
        <div className="ptext">
          <h1>Pricing plans for all sizes</h1>
          <p>
            Onely streamlines the management of health and disability services,
            allowing providers to focus on delivering exceptional care.
          </p>
        </div>
      </div>
      <div className="psection">
        <div className="itembox">
          {/* show package list
          {PricingCard.map((data, index) => (
            <PriceS key={index} detail={data} />

            // <PriceS key={index} name={data.name} description={data.desc}
            //     price={data.price} priceDetails={data.priceDetails} lia={data.lia}
            //     lib={data.lib} lic={data.lic} lid={data.lid} lie={data.lie}
            // />
          ))} */}

          <PriceS/>
        </div>
      </div>
    </>
  );
};

export default PriceF;
