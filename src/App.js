import PickButton from "./components/PickButton";
import Chip from "./components/Chip";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([
    { name: "klom korn", type: "restaurant" },
    { name: "dock asian eatery", type: "restaurant" },
    { name: "pita grill", type: "restaurant" },
    { name: "derek truck", type: "restaurant" },
    { name: "bombay kitchen", type: "restaurant" },
    { name: "burger king", type: "restaurant" },
    { name: "Caraotas", type: "restaurant" },
    { name: "Hartbreakers", type: "restaurant" },
    { name: "Heavy Woods", type: "restaurant" },
    { name: "Pizza", type: "food" },
  ]);
  const [picked, setPicked] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setFoods((prevState) => [
      ...prevState,
      { name: e.target[0].value, type: e.target[1].type },
    ]);
  };

  const handlePick = () => {
    console.log("clicked!");
    let randomNumIndex = Math.floor(Math.random() * foods.length);
    setPicked(foods[randomNumIndex]);
  };

  return (
    <div className="px-4 py-10">
      <div className="w-100">
        <h1 className="ml-2 mb-4 font-bold uppercase">
          Picked: {picked && picked.name}
        </h1>
      </div>
      <div className="w-100">
        <h2 className="ml-2 mb-4 font-bold uppercase">Choices: </h2>
        {foods.map((foodOption) => (
          <Chip
            key={`${foodOption.name}`}
            food={foodOption.name}
            setFoods={setFoods}
          />
        ))}
      </div>

      <form className="py-4 w-100" onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="name" name="title" type="text"></input>
        <select name="type">
          <option>Restaurant</option>
          <option>Food</option>
        </select>
        <button type="submit">➕</button>
      </form>

      <PickButton handlePick={handlePick} />
    </div>
  );
}

export default App;
