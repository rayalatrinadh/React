import React from "react";
import ReactDOM from  "react-dom/client";
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
  

function App(){
    return <div className = "container">
        <h1>Hello React! Trinadh Rayala</h1>
        <p>Trinadh Rayala</p>
        <Header />
        <Menu />

        <Footer />
        
    </div>
}

//creating the Pizza Component

function Pizza(){
    return(
    <div>
   
    <img src = "pizzas/focaccia.jpg" alt = "pizza Foccacia"/>
    <div>

    <strong>ingredients:</strong>
    <p>"Bread with italian olive oil and rosemary"</p>
    </div>
    </div>
    );
}

function Header(){
    const style = {
        color:"red", 
        fontSize : "28px",
        textTransform : "uppercase"
    };
    return(
        <header className = "header">
        <h1 style = {style} >
        Trinadh Fast React Pizza Co.
        </h1>

        </header>
    );
}

function Menu(){
   return(
    <main className = "menu">
        <div>
            <Pizza />
            <Pizza />
        </div>
    </main>
   );
}

function Footer(){

    const hour = new Date().getHours();
    const openHour = 19;
    const closedHour = 20;

    const isOpen = hour >= openHour && hour <= closedHour;
    console.log(isOpen);
    return(
        <footer className = "footer">
        <div>
        <footer>{new Date().toLocaleTimeString()}.we're currently open.</footer>
        </div>
        </footer>
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