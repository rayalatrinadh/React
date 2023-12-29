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

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  //const friends = initialFriends; //upState
  const [friends, setFriends] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleSelection(friend){
    setFriends(friend);
  }

  function handleAddFriend(friend) {
    //remember react is immutable way dealings.
    //here we are createing new array
    //not update the object. instead created new one.
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends}
        selectedFriend = {selectedFriend} 
        onSelection = {handleSelection}
        />

        {showAddFriend ? <FormAddFriend onAddFriend={handleAddFriend} /> : ""}

        <Button onClick={handleShowAddFriend}>
          {/* Add Friend */}
          {/* {console.log("showAddFriend : " + showAddFriend)} */}
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend = {selectedFriend}/>}
    </div>
  );
}

function FriendsList({ friends, selectedFriend, onSelection}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend 
            friend={friend} 
            key={friend.id} 
            selectedFrien = {selectedFriend}
            onSelection = {onSelection}
            
            
            />
      ))}
    </ul>
  );
}

function Friend({ friend, selectedFriend, onSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h2>{friend.name}</h2>

      {friend.balance < 0 && (
        <p className="red">
          You Owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p> You and {friend.name} are Even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  //first declare the state and the add value to the html of the particular intput field

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  //this function is called by react with the event handle
  //when onSubmit = {handleSubmit} activated
  function handleSubmit(e) {
    //to restrict the default calling the function
    e.preventDefault();

    if (!name || !image) return;

    //crypto.randomUUID() is the browser default function to generate randomId
    //it is not worked in the old browsers
    const id = crypto.randomUUID();
    //creating the new Object(Friend)
    const newFriend = {
      id,
      name,
      image,
      balance: 0,
    };

    onAddFriend(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({selectedFriend}) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value </label>
      <input type="text" />

      <label>🕴️Your Expense </label>
      <input type="text" />

      <label>👯 {selectedFriend.name}'s Expense </label>
      <input type="text" disabled />

      <label>🤑 who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
    </form>
  );
}
