import './App.css';
import Items from '../Items/Items';
import CashRegister from "../CashRegister/CashRegister";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <div className="App">
        <Items 
          updateTotalPrice={(price) => setTotal(total + price)}
        />
        <CashRegister total={total} />
      </div>
    </>
  );
}

export default App;
