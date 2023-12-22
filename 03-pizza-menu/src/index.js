import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello React! Trinadh Rayala</h1>
      <p>Trinadh Rayala</p>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "28px",
    textTransform: "uppercase",
  };
  return (
    <header className="header">
      <h1 style={style}>Trinadh Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {
      numPizzas > 0 ? (
        <>
        <p>Hello Trinadh here is the list of the pizas.</p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
        </>
      ):(
        <p>Oops, The List is Empty.</p>
      )
      
      }

      {/* {numPizzas <= 0 && (
        <p style={{ backgroundColor: "red" }}> Oops, The List Is EMPTY.</p>
      )} */}

      {/* <Pizza name = 'Pizza Trinadh' ingredients = 'salt, pepper, tomato'
             photoName = 'pizzas/focaccia.jpg' 
             price = {25}
             />

            <Pizza name = 'Pizza Rakesh' ingredients = 'Spinach, pepper, tomato,Onion'
             photoName = 'pizzas/margherita.jpg' 
             price = {35}
             /> */}
    </main>
  );
}

//creating the Pizza Component

function Pizza({pizzaObj}) {
  console.log(pizzaObj);
  return (
    <li className = {`pizza ${pizzaObj.soldOut ? "sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h1>{pizzaObj.name}</h1>
        <h3>{pizzaObj.ingredients}</h3>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closedHour = 20;

  const isOpen = hour >= openHour && hour <= closedHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {!isOpen && (
       <Order openHour = {openHour} closedHour = {closedHour}/>
      )}

      {isOpen && (
        <div className="order">
          <p>Welcome To the Pizza Store.</p>
        </div>
      )}
      <div className="order">
        <button className="btn">Order</button>
      </div>
      {/* <div>
        <footer>{new Date().toLocaleTimeString()}.we're currently open.</footer>
      </div> */}
    </footer>
  );
}

function Order({openHour,closedHour}){
  return (
    <div className="order">
    <p>
      Sorry we're closed. working Timings : {openHour}:00 to {closedHour}
      :00
    </p>
  </div>
  );
}
//React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//React.render(<App />, document.getElementById("root"));
