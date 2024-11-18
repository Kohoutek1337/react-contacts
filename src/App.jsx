import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="app">
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
