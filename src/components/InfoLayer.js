import React from "react";
import Button from "./Button";
import { bankSign1, bankSign2, banksign3 } from "./SvgImg/SVGs";

const InfoLayer = () => {
  return (
    <div className="flex justify-around items-center bg-orange-100 w-[95%] h-[20%] rounded-lg shadow-xl absolute left-0 right-0 top-[415px] bottom-0 m-auto border-r-4 border-orange-600">
      <div className="flex justify-center items-center">
        {bankSign1}
        {bankSign2}
        {banksign3}
      </div>
      <span className="font-serif">Compare lenders and get your finance</span>
      <Button
        title="Apply now"
        style="flex justify-center gap-2 bg-green-600 text-white rounded-md w-[14%] p-1 shadow-md hover:shadow-lg"
        disabled={false}
      />
    </div>
  );
};

export default InfoLayer;
