import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Avatar 1.png" className="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1> Alia Mohammed </h1>
      <div className="data">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis natus
        obcaecati perferendis veritatis velit reprehenderit quasi quod
        sequirepellendus odit fuga illum quae ad, eum ab dolores maxime! Ipsa,
        iste.
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji} </span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="react" emoji="🧠" color="blue" />
      <Skill skill="html + css" emoji="👍" color="red" />
      <Skill skill=".net" emoji="🙂" color="green" />
      <Skill skill="web design" emoji="✋" color="pink" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
