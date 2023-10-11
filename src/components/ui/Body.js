import React, { useRef, useState } from "react";
import Filters from "./Filters";
import Products from "./Products";
import { bgURL } from "../utils/cdn";
import Recomend from "./Recomend";

const Body = () => {
  const [recomend, setRecomend] = useState(false);
  const [products , setProducts] = useState(false)

  function handleCLick() {
    return setProducts(true);
  }
  let mt = "mt-12" 

  if(products) {
    mt = "mt-0" 
  } 

  return (
    <div className="flex flex-col items-center " >
        { !products && <img src={bgURL} className="absolute" alt="" />}
      
      <div className={"w-2/3 relative p-6 "+ mt }>
        <div
          className="absolute right-11 my-2 cursor-pointer"
          onClick={() => handleCLick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M15.69 27.6743C22.3093 27.6743 27.6753 22.3083 27.6753 15.6889C27.6753 9.06963 22.3093 3.70361 15.69 3.70361C9.07064 3.70361 3.70462 9.06963 3.70462 15.6889C3.70462 22.3083 9.07064 27.6743 15.69 27.6743Z"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.0246 24.6462L28.7232 29.3329"
              stroke="#200E32"
              strokeOpacity="0.4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          className="p-3 px-5 text-xl shadow-xl rounded-2xl  border-2 w-full"
          placeholder="Search"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCLick();
            }
          }}
          onFocus={() => setRecomend(true)}
          onBlur={() => setRecomend(false)}
        />
      </div>
      <div className="flex">{(recomend && !products )  && <Recomend />}
      { products && <div className="flex"><Filters/><Products/> </div> }
      </div>
    </div>
  );
};

export default Body;
