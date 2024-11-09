import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTasks from './components/AddTasks';
import ToDoCards from './components/ToDoCards';

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <AddTasks />
        <ToDoCards />
      </div>
    </>
  );
}

export default App;