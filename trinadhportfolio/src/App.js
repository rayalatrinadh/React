import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <p>Trinadh Rayala</p>
    <Portfolio />
    </div>

  );
}

function Portfolio(){
  return(
    <div className = "avatar">
      <img src = "/friends.jpg" alt = "trinadhImage" />
    <div className = "data">
      <p>we are the group of friends visited lord venkateswara temple which locates at aurora</p>
    </div>
    <div className = "skill">
      <p>Java</p>
      <p>React</p>
      <p>Angular</p>

    </div>
    </div>
  );
}

export default App;
