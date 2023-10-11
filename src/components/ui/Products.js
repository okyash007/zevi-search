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

  return (
    <div className="flex flex-wrap w-4/5 overflow-y-scroll h-screen">
      {displayData.map((m) => (
        <div className=" m-6" key={m.id}>
          <img src={m.image} className="w-56" alt="" />
          <h1 className="font-medium pt-3">{m.name}</h1>
          <div className="flex">
            <p className="pr-3 font-thin line-through text-[#b0b0b0]">
              Rs.{m.price + 100}
            </p>
            <p className="text-[#6D84FF] font-semibold">Rs.{m.price}</p>
          </div>
          <div className="flex">
          <div className="flex">{
            getStars(m.rating).map( (i, index) => <img key={index} src={i}  className="w-4 mr-1" alt="" /> )
            }
            </div>
            <div><p className="text-xs">{ "(" + m.numberOfRatings +")" }</p></div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
