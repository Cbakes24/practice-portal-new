import React from "react";
import CustomerServiceButtons from "./CustServiceButtons";

const HomeStats = () => {
  return (
    <div className=" p-2 md:items-center mt-5 grid md:justify-between text-left border-2 border-black md:text-2xl  md:w-full md:max-w-6xl md:mb-0 md:ml-0  md:grid-cols-2 md:text-justify ">
      <div className="md:text-5xl md:text-center ">$1,216,750</div>
      <div className="">
        <p className="md:p-4 md:border-b md:border-b-green-600">
          127 Phillips Brooks Rd
        </p>
        <p className="md:p-4 md:border-b md:border-b-green-600">
          Est. Payment $7,000/mo
        </p>
        <CustomerServiceButtons />
      </div>
    </div>
  );
};

export default HomeStats;
