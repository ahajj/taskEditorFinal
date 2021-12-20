import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './TaskList';
import CompletedTasks from './CompletedTasks';
import About from './About';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
	<Router>
	    <Routes>
          <Route path="/tasks" element={<TaskList/>}/>
          <Route path="/completed" element={<CompletedTasks/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
		<App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
