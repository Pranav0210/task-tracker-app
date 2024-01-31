import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import TaskCard from './components/TaskCard.tsx';
import NewTask from './components/NewTask.tsx';
import Dashboard from './components/Dashboard.tsx';
import Header from './components/Header.tsx';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/new-task" element={<NewTask/>}/>
        <Route path="/card" element={<TaskCard/>}/>
        <Route path="/head" element={<Header/>}/>
      </Routes>
    </Router>
  );
}

export default App;
