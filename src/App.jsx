import "./components/styles.css";
import Day from "./components/Day";
import "./assets/css/index.css";

function App() {
  function handleAdd() {}

  return (
    <>
      <button onClick={handleAdd}>Add a new day</button>
      <Day />
    </>
  );
}

export default App;
