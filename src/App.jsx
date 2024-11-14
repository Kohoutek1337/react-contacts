import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Content from "./Content";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="app">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} />
    </div>
  );
}

export default App;
