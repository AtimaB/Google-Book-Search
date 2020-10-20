import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Headers from "./components/Headers";

function App() {
  return (
    <div className="App">
      <Navbar />
      {Headers()}
    </div>
  );
}

export default App;
