import "./components/styles.css";
import Day from "./components/Day";
import "./assets/css/index.css";
import { useState } from "react";

function App() {
  const [days, setDays] = useState([]); // days list to [] empty

  function addDay() {
    if (days.length < 7) {
      setDays((days) => [...days, {}]); // add a new empty object to days list}
    }
  }

  function deleteDay() {
    setDays((days) => days.slice(0, -1));
  }

  return (
    <div>
      <button onClick={addDay}>Add a new day</button>
      <button onClick={deleteDay}>Delete a day</button>
      <div className="main">
        {days.map((_, index) => (
          <Day key={index} /> // display days list by mapping a day to every empty object
        ))}
      </div>
    </div>
  );
}
export default App;
