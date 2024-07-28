import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const skills = [
  { skill: 'Javascript', level: 'advanced', color: 'purple' },
  { skill: 'HTML + CSS', level: 'advanced', color: 'blue' },
  { skill: 'Web Design', level: 'advanced', color: 'red' },
  { skill: 'Git and GitHub', level: 'intermediate', color: 'yellow' },
  { skill: 'React', level: 'intermediate', color: 'green' },
];

export default skills;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
