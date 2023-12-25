import { useState } from "react";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item ) {
    // in react everything is immutalbe
    //  here is the syntax to updae the list object
    // ...items -> it means the previous list is fetching
    // and then add new item to the list
    console.log(" Before : item in App() : " +  item);
    //setItems((items) => [...items, {initialItems}]);
    setItems((items) => [...items, item]);
    console.log(" After : item in App() : " +  item);
  }
  return (
    <div className="app">
      <Logo />
      {/* in this form component passing function */}
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🧜‍♂️ Far Away 😍</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(3);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    //configuring the new Item
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    //form prop
    onAddItems(newItem);

    //set default values
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip ? 🤷❔</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
console.log("items : " +  {items});
  
  return (
    <div className="list">
      {/* <ul> */}
      <li>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </li>
      {/* </ul> */}
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 you have x items on your list, and you already packed x (x%).</em>
    </footer>
  );
}
