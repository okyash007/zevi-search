import { useGetData } from "./components/hooks/useGetData";
import { useDispatch } from "react-redux";
import { addFilterProducts } from "./components/store/productSlice";
import Body from "./components/ui/Body";

function App() {

  const dispatch = useDispatch()
  const data = useGetData()
  dispatch( addFilterProducts(data) )



  return (
    <Body/>

  );
}

export default App;
