import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../utils/filters";
import { addDisplayProducts, addFilterProducts } from "../store/productSlice";

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

  let brand1 = useRef(null)
  let brand2 = useRef(null)
  let brand3 = useRef(null)

  const data = useSelector((store) => store.products.filterProducts);
  const [ratings, setRatings] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState([]);

  const filterData = filterProducts(data, price, ratings, brands);
  console.log(price);
  console.log(filterData);

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
      setRatings(ratings.filter((i) => i !== rate ));
    }
  }

  function brandFilter ( brand, x ){
    if (x.current.checked) {
        setBrands([...brands, brand]);
      } else if (!x.current.checked) {
        setBrands(brands.filter((i) => i !== brand ));
      }
  }

  return (
    <div>
      <h1>filters</h1>
      <div>
        <h1>Brands</h1>
        <div>
          <input
            type="checkbox"
            ref={brand1}
            onClick={() => {
              brandFilter('H&N', brand1);
            }}
            className=""
          />
          <label>H&N</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={brand2}
            onClick={() => {
              brandFilter('Zara', brand2);
            }}
            className=""
          />
          <label>Zara</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={brand3}
            onClick={() => {
              brandFilter('Zudio', brand3);
            }}
            className=""
          />
          <label>Zudio</label>
        </div>
      </div>
      <div>
        <h1>price</h1>
        <div>
          <input
            type="checkbox"
            ref={price1}
            onClick={() => {
              priceFilter([0, 100], price1);
            }}
            className=""
          />
          <label>under 100</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={price2}
            onClick={() => {
              priceFilter([100, 500], price2);
            }}
          />
          <label>100 to 500</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={price3}
            onClick={() => {
              priceFilter([500, 1000], price3);
            }}
          />
          <label>500 to 1000</label>
        </div>
      </div>
      <div>
        <h1>ratings</h1>
        <div>
          <input
            type="checkbox"
            ref={rating1}
            onClick={() => {
              ratingFilter(1, rating1);
            }}
            className=""
          />
          <label>rating 1</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={rating2}
            onClick={() => {
              ratingFilter(2, rating2);
            }}
            className=""
          />
          <label>rating 2</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={rating3}
            onClick={() => {
              ratingFilter(3, rating3);
            }}
            className=""
          />
          <label>rating 3</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={rating4}
            onClick={() => {
              ratingFilter(4, rating4);
            }}
            className=""
          />
          <label>rating 4</label>
        </div>
        <div>
          <input
            type="checkbox"
            ref={rating5}
            onClick={() => {
              ratingFilter(5, rating5);
            }}
            className=""
          />
          <label>rating 5</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
