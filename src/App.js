import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import players from './data/playersData';
import './App.css';

function App() {
  return (
    <div className="App">
      {players.map((player) => (
        <BasketballPlayerCard
          key={player.name}
          name={player.name}
          image={player.image}
          position={player.position}
          stats={player.stats}
        />
      ))}
    </div>
  );
}

export default App;
