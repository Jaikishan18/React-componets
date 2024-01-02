import "./index.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themestyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  const doubleNumber = useMemo(() => {
    return multiplication(number);
  }, [number]);
  useEffect(() => {
    console.log("number changed");
  }, [number]);

  return (
    <div className="container">
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      ></input>

      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        toggle
      </button>

      <div className="double" style={themestyles}>
        <p>This is the double container</p>
        <h4>number:{doubleNumber}</h4>
      </div>
    </div>
  );
}

function multiplication(num) {
  return num * 2;
}
export default App;
