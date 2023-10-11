import React from "react";
import { useSelector } from "react-redux";

const Recomend = () => {
  const displayData = useSelector((store) => store.products.filterProducts);
  let displayData1 = displayData.slice(0, 5);
  let displayData2 = displayData.slice(5, 10);
  console.log(displayData1);

  return (
    <div className="z-20 bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold pb-3">latest Trende</h1>
      <div className=" flex space-x-7">
        {displayData1.map((m) => (
          <div>
            <img src={m.image} className="w-48 rounded-md" alt="" />
            <h1 className="text-sm mt-2">{m.name}</h1>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-semibold py-3 pt-6">Popular Suggestions</h1>
        {displayData2.map((m) => (
          <p>{m.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Recomend;
