import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../utils/filters";
import { addDisplayProducts } from "../store/productSlice";
import { blackStar, goldStar } from "../utils/cdn";

const Filters = () => {
  const dispatch = useDispatch();

  let price1 = useRef(null);
  let price2 = useRef(null);
  let price3 = useRef(null);

  let rating1 = useRef(null);
  let rating2 = useRef(null);
  let rating3 = useRef(null);
  let rating4 = useRef(null);
  let rating5 = useRef(null);

  let brand1 = useRef(null);
  let brand2 = useRef(null);
  let brand3 = useRef(null);

  const data = useSelector((store) => store.products.filterProducts);
  const [ratings, setRatings] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState([]);

  filterProducts(data, price, ratings, brands);
  // console.log(price);
  // console.log(filterData);

  dispatch(addDisplayProducts(filterProducts(data, price, ratings, brands)));

  function priceFilter(priced, x) {
    if (x.current.checked) {
      setPrice([...price, priced]);
    } else if (!x.current.checked) {
      setPrice(price.filter((i) => i[0] !== priced[0] && i[1] !== priced[1]));
    }
  }

  function ratingFilter(rate, x) {
    if (x.current.checked) {
      setRatings([...ratings, rate]);
    } else if (!x.current.checked) {
      setRatings(ratings.filter((i) => i !== rate));
    }
  }

  function brandFilter(brand, x) {
    if (x.current.checked) {
      setBrands([...brands, brand]);
    } else if (!x.current.checked) {
      setBrands(brands.filter((i) => i !== brand));
    }
  }

  return (
    <div className="p-8 w-1/5">
      <h1 className="text-3xl font-medium">Search Results</h1>
      <div className="py-2 border-b-2 border-[#d0d0d0]">
        <h1 className="text-xl font-medium my-2">BRAND</h1>
        <div className="pb-2 flex items-center ">
          <input
            type="checkbox"
            ref={brand1}
            onClick={() => {
              brandFilter("H&N", brand1);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">H&N</label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={brand2}
            onClick={() => {
              brandFilter("Zara", brand2);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">Zara</label>
        </div>
        <div className="pb-1 flex items-center">
          <input
            type="checkbox"
            ref={brand3}
            onClick={() => {
              brandFilter("Zudio", brand3);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">Zudio</label>
        </div>
      </div>
      <div className="py-2 border-b-2 border-[#d0d0d0]">
        <h1 className="text-xl font-medium my-2">PRICE RANGE</h1>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={price1}
            onClick={() => {
              priceFilter([0, 100], price1);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">under 100</label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={price2}
            onClick={() => {
              priceFilter([100, 500], price2);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">100 to 500</label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={price3}
            onClick={() => {
              priceFilter([500, 1000], price3);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2">500 to 1000</label>
        </div>
      </div>
      <div className="py-2 ">
        <h1 className="text-xl font-medium my-2">RATINGS</h1>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={rating1}
            onClick={() => {
              ratingFilter(1, rating1);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2 flex">
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
          </label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={rating2}
            onClick={() => {
              ratingFilter(2, rating2);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2 flex">
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
          </label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={rating3}
            onClick={() => {
              ratingFilter(3, rating3);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2 flex">
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
          </label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={rating4}
            onClick={() => {
              ratingFilter(4, rating4);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2 flex">
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={blackStar} className="w-6 mr-1" alt="" />
          </label>
        </div>
        <div className="pb-2 flex items-center">
          <input
            type="checkbox"
            ref={rating5}
            onClick={() => {
              ratingFilter(5, rating5);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-sm border-gray-300 transition duration-150 ease-in-out"
          />
          <label className="px-2 flex">
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
            <img src={goldStar} className="w-6 mr-1" alt="" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
