import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './App.css';

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
  return (
    <div>
      <img className="avatar" src="profile.jpg" alt="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Kurtis Edwards</h1>
      <p>
        Front-end web developer. When not coding, I like to play videogames,
        spend time with friends, and listen to music
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="Javascript" emoji="💪" color="purple" />
      <Skill skillName="HTML + CSS" emoji="💪" color="blue" />
      <Skill skillName="Web Design" emoji="💪" color="red" />
      <Skill skillName="Git and GitHub" emoji="👍" color="yellow" />
      <Skill skillName="React" emoji="👍" color="green" />
    </div>
  );
}

function Skill({ skillName, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>{emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;
