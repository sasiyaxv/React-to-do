import "./App.css";
import React from "react";
import ToDo from "./components/ToDo";

// References
// https://github.com/abarna1908/To-do-App-in-React-Code

function App() {
  return (
    <div className="App">
      <p className="main-header">To-Do List</p>
      <div className="to-do-wrapper">
        <ToDo></ToDo>
      </div>
    </div>
  );
}

export default App;
