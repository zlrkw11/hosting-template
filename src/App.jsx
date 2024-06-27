import "./components/styles.css";
import Day from "./components/Day";
import "./assets/css/index.css";
import { useState } from "react";

function App() {
  const [days, setDays] = useState([]); // days list to [] empty
  function AddDay() {
    setDays((days) => [...days, {}]); // add a new empty object to days list
  }

  return (
    <div className="main">
      <button onClick={AddDay}>Add a new day</button>
      {days.map((_, index) => (
        <Day key={index} /> // display days list by mapping a day to every empty object
      ))}
    </div>
  );
}

export default App;
