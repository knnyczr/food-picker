import PickButton from "./components/PickButton";
import Chip from "./components/Chip";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState([
    { name: "Klom Korn", type: "restaurant" },
    { name: "Dock Asian Eatery", type: "restaurant" },
    { name: "Pita Grill", type: "restaurant" },
    { name: "Derek Truck", type: "restaurant" },
    { name: "Desi Grill Indian", type: "restaurant" },
    { name: "Caraotas", type: "restaurant" },
    { name: "Heavy Woods", type: "restaurant" },
    { name: "Pizza", type: "food" },
    { name: "Green Street", type: "restaurant" },
  ]);
  const [picked, setPicked] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (e.target[0].value !== "") {
      setFoods((prevState) => [
        ...prevState,
        { name: e.target[0].value, type: e.target[1].type },
      ]);
    }
  };

  const handlePick = () => {
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

      <div className="min-w-full flex flex-col items-center">
        <form className="py-4 w-100" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="p-4"
            placeholder="name"
            name="title"
            type="text"
          ></input>
          <select className="p-4" name="type">
            <option>Restaurant</option>
            <option>Food</option>
          </select>
          <button className="ml-10 p-4" type="submit">
            ➕
          </button>
        </form>
      </div>

      <div className="mt-20 min-w-full flex flex-col items-center">
        <PickButton handlePick={handlePick} />
      </div>
    </div>
  );
}

export default App;
