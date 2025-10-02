import { useState } from "react";
import PictureCard from "./PictureCard/picture.jsx";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState([]);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <div>Memory Card Game</div>
      <PictureCard
        setCurrentScore={setCurrentScore}
        currentStreak={currentStreak}
        updateStreak={setCurrentStreak}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <p>Current score: {currentScore}</p>
      <p>Current high-score: {highScore}</p>
      <p>Streak: {currentStreak.map((value) => `${value}, `)}</p>
    </>
  );
}

export default App;
