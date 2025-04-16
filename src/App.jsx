import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedNames, setClickedNames] = useState([]);
  const [cardOrder, setCardOrder] = useState([
    'pikachu',
    'charizard',
    'squirtle',
    'bulbasaur',
    'jigglypuff',
    'meowth',
    'eevee',
    'snorlax',
    'mewtwo',
    'lucario',
    'gengar',
    'greninja'
  ]);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleCardClick(name) {
    if (clickedNames.includes(name)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedNames([]);
    } else {
      setScore(score + 1);
      setClickedNames([...clickedNames, name]);
    }

    setCardOrder(shuffleArray(cardOrder));
  }

  return (
    <div className="page">
      <h1 className="title">Memory Game</h1>
      <p className="desc">Get points by clicking on an image but don't click on any more than once!</p>
      <span className="scr">Score: {score}</span>
      <span className="bscr">Best Score: {bestScore}</span>

      <div className="card-container">
        {cardOrder.map((name) => (
          <div key={name} className="card">
            <Card
              name={name}
              handleClick={() => handleCardClick(name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
