import React from "react";
import { useSelector } from "react-redux";
import { blackStar, goldStar } from "../utils/cdn";

const Products = () => {
  const displayData = useSelector((store) => store.products.displayProducts);
  console.log(displayData);

  function getStars(rating) {
    let goldStars = Math.floor(rating);
    let blackStars = Math.floor(5 - rating);
    let stars = [];
    for (let i = 0; i < goldStars; i++) {
      stars.push(goldStar);
    }
    for (let i = 0; i < blackStars; i++) {
      stars.push(blackStar);
    }
    return stars;
  }

  let starts = getStars(3);
  console.log(starts);

  if (displayData == null) {
    return <div className="w-4/5 h-screen"></div>;
  }

  return (
    <div className="flex flex-wrap w-4/5 overflow-y-scroll h-[85vh]">
      {displayData.map((m) => (
        <div className=" m-6 relative" key={m.id}>

          <div className="relative">
          <div className="absolute right-2 top-2">
            <div className="heart-container" title="Like">
              <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
              <div className="svg-container">
                <svg
                  viewBox="0 0 24 24"
                  className="svg-outline"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  className="svg-filled"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                </svg>
                <svg
                  className="svg-celebrate"
                  width={100}
                  height={100}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="10,10 20,20" />
                  <polygon points="10,50 20,50" />
                  <polygon points="20,80 30,70" />
                  <polygon points="90,10 80,20" />
                  <polygon points="90,50 80,50" />
                  <polygon points="80,80 70,70" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full flex items-end opacity-0 hover:opacity-100">
          <p className="text-white w-full h-12 bg-blue-700 flex justify-center items-center  bg-opacity-60 opacity-100">View Product</p></div>
            <img src={m.image} className="w-56" alt="" />
          </div>

          <h1 className="font-medium pt-3">{m.name}</h1>
          <div className="flex">
            <p className="pr-3 font-thin line-through text-[#b0b0b0]">
              Rs.{m.price + 100}
            </p>
            <p className="text-[#6D84FF] font-semibold">Rs.{m.price}</p>
          </div>
          <div className="flex">
            <div className="flex">
              {getStars(m.rating).map((i, index) => (
                <img key={index} src={i} className="w-4 mr-1" alt="" />
              ))}
            </div>
            <div>
              <p className="text-xs">{"(" + m.numberOfRatings + ")"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
