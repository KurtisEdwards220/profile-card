import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import './App.css';

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
  return (
    <div className="avatar">
      <img className="img" src="profile.jpg" alt="avatar" />
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
    <div className="avatar">
      <p>hello</p>
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
