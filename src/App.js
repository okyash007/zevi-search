import Products from "./components/ui/Products";
import Filters from "./components/ui/Filters";
import { useGetData } from "./components/hooks/useGetData";
import { useDispatch } from "react-redux";
import { addFilterProducts } from "./components/store/productSlice";

function App() {

  const dispatch = useDispatch()
  const data = useGetData()
  dispatch( addFilterProducts )



  return (
    <div className="flex">
      <Filters/>
      <Products />
    </div>
  );
}

export default App;
