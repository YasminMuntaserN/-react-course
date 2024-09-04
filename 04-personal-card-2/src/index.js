
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
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

function getEmoji(level){
 let skillEmoji= level === "advanced" ?"🧠" :
  level === "intermediate" ?"👍" :"🙂" ;
  return skillEmoji;
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        console.log(skill);
        return (
          <Skill 
            skill={skill.skill} 
            emoji={getEmoji(skill.level)}
            color={skill.color} 
          />
        );
      })}
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
