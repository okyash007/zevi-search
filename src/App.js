import { getData } from "./components/getData";
import { filterProducts } from "./components/filters";

function App() {

let data = getData()
let filter =  filterProducts(data, [ 0 , Infinity ], [ 5] , ['H&N', 'Zara'])

console.log(data)
console.log(filter)

  return (
    <div>

    </div>
  );
}

export default App;
