import { useState } from "react";
import MovieList from "./components/MovieList";
import './App.css'; // Assuming you have some global styles

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header style={{ padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>🎬 Movie World</h1>
        <button onClick={toggleMode} style={{ padding: "5px 10px" }}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <MovieList />
    </div>
  );
};

export default App;