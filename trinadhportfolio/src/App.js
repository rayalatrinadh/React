import "./App.css";

function App() {
  return (
    <div className="card">
      <p>Trinadh Rayala</p>
      <Avatar />
      <div className = "data">
      <Intro />
      </div>
      <SkillList />
    </div>
  );
}

/*

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

*/

function Avatar() {
  return (
    
      <img className="avatar" src="/friends.jpg" alt="trinadhImage" />
    
  );
}

function Intro() {
  return (
    <div>
      <h1>Trinadh Rayala.</h1>
      <p>
        Hello we are the group of 5 people went to Lord Venkateswara Temple which
        locates at aurora. we 5 peoples are staying in a single room at the
        residence of chicago. we are enjoyed a lot.
        <span>Java</span>
        <p>Hello</p>
      </p>
    </div>
  );
}

function SkillList() {
  return(
    <div className = "skill-list">
      <Skill  skill =  "java" color = "green" emoji = "💪"/>
      <Skill  skill = "react" color = "green"  emoji = "💪"/>
      <Skill  skill = "HTML+CSS" color = "green" emoji = "💪"/>
      <Skill skill = "Angular"  color = "green" emoji = "💪"/>
      <Skill skill = "AI"  color = "orangered" emoji="👶"/>

    </div>
  );
}

function Skill(props){
  return(
    <div className = "skill" style = {{backgroundColor : props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
