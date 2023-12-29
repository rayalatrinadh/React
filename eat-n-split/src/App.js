import "./index.css";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Shaida",
    image: "./images/trinadh_01.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Zannath",
    image: "./images/trinadh_02.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Gopi",
    image: "./images/trinadh_03.jpg",
    balance: 0,
  },
];

function Button({children ,onClick}){
  return <button className = "button" onClick = {onClick}>{children}</button>
}

export default function App(){

  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend(){
    setShowAddFriend((show) => !show);
  }

  return(
    <div  className = "app">
      <div className = "sidebar">
        <FriendsList />

        {showAddFriend ? <FormAddFriend /> : ""}
        
        <Button onClick = {handleShowAddFriend}>
          
          {/* Add Friend */}
         {/* {console.log("showAddFriend : " + showAddFriend)} */}
          {showAddFriend ? 'Close' : 'Add Friend'}
          
          </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList(){
  
  const friends = initialFriends;
  
  return(
    <ul>
      {
        friends.map((friend) => (
          <Friend friend = {friend} key = {friend.id} />
        ))
      }
    </ul>
  );
}

function Friend({friend}){
    return(
      <li>
      <img src = {friend.image} alt = {friend.name} />
      <h2>{friend.name}</h2>

      {
        friend.balance < 0 && (
         <p className = "red">
          You Owe {friend.name} {Math.abs(friend.balance)}$
         </p> 
        )
      }

      {
        friend.balance > 0 && (
          <p className = "green">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )
      }

      {
        friend.balance === 0 && <p> You and {friend.name} are Even</p>
      }

      <Button>Select</Button>
    </li>
    );
}


function FormAddFriend(){
  return(
    <form className = "form-add-friend">
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type = "text" />

      <label>🌄 Image URL </label>
      <input type = "text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill(){
  return(
    <form className = "form-split-bill">
      <h2>Split a bill with x</h2>

      <label>💰 Bill Value </label>
      <input type = "text" />

      <label>🕴️Your Expense </label>
      <input type = "text" />

      <label>👯 X's Expense </label>
      <input type = "text" disabled/>

      <label>🤑 who is paying the bill</label>
      <select>
        <option value ="user">You</option>
        <option value = "friend">X</option>
      </select>
    </form>
  );
}