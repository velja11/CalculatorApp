import React from "react";
import Button from "./Button";
import { calculator, downloadSign } from "./SvgImg/SVGs";

const Title = ({ downloadBtn, isIncome }) => {
  return (
    <div className="flex justify-between items-end mt-6 ml-4 mr-4">
      <div className="flex items-end">
        {calculator}
        <h1 className="text-lg font-bold inline-block">
          Income tax calculator
        </h1>
      </div>
      {downloadBtn && isIncome && (
        <Button
          title="Download"
          disabled={false}
          style="border border-gray-200 text-green-600 flex justify-center gap-2 bg-white h-full rounded-md w-[14%] p-1 hover:text-green-400 shadow-md mr-2 hover:border-2 hover:border-gray-300 hover:bg-green-300 hover:text-white"
        >
          {downloadSign}
        </Button>
      )}
    </div>
  );
};

export default Title;
