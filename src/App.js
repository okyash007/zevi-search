import { useGetData } from "./components/hooks/useGetData";
import { filterProducts } from "./components/utils/filters";
import Products from "./components/ui/Products";
import { useDispatch } from "react-redux";
import { addFilterProducts } from "./components/store/productSlice";
import Filters from "./components/ui/Filters";

function App() {
  const dispatch = useDispatch();
  let wantRatings = [1, 2, 3, 4, 5];
  let wantBrands = ["H&N", "Zara", "Zudio"];

  let data = useGetData();
  let filter = filterProducts(data, [0, 1000], wantRatings, wantBrands);

  let ffilter = filterProducts(filter, [500, 1000], wantRatings, wantBrands);

  console.log(data);
  console.log(ffilter);

  dispatch(addFilterProducts(data));

  return (
    <div className="flex">
      <Filters/>
      <Products />
    </div>
  );
}

export default App;
