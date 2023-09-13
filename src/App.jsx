import { useState } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import "../src/components/Bottles/Bottles.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Bottles></Bottles>{" "}
      </div>
    </>
  );
}

export default App;
