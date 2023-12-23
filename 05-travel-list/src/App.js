
import {useState} from "react";
import "./index.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  console.log(initialItems);
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🧜‍♂️ Far Away 😍</h1>;
}

function Form() {

  const [description, setDescription] = useState("Trinadh");
  const [quantity, setQuantity] = useState(3);

  function handleSubmit(event){
    event.preventDefault();

    if(!description) return;

    //configuring the new Item
    const newItem = {description, quantity, packed:false, id:Date.now()};
    console.log(newItem);

    //set default values
    setDescription("");
    setQuantity(1);

  }


  return (
    <form className="add-form" onSubmit = {handleSubmit}>
      
      <h3> What do you need for your trip ? 🤷❔</h3>

      <select 
      value = {quantity}
      onChange = {
        (e) => setQuantity(Number(e.target.value))
      }
      >
        {
        Array.from({length : 30}, (_,i) => i+1).map
        ((num) => (<option value = {num} key = {num}>
          {num}
        </option>
        ))}
      </select>
      <input type = "text" placeholder =  "Item..." value = {description}
      onChange = {(e) =>
      
      {
        //console.log(e.target.value);
        setDescription(e.target.value)}
      
      }/>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      {/* <ul> */}
      <li>
        {initialItems.map((item) => (
          <Item item={item} key ={item.id}/>
        ))}
        </li>
      {/* </ul> */}
    </div>
  );
}

function Item({ item }) {
  return(
    <li>
    <span style = {item.packed  ? {textDecoration : "line-through"} : {}}>
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
