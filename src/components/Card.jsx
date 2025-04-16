import { useState, useEffect } from 'react';
import '../styles/card.css';

function Card({ name, handleClick }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) setData(json);
      })
      .catch((error) => {
        console.error("Failed to fetch Pokémon:", error);
      });

    return () => {
      ignore = true;
    };
  }, [name]);

  const imageUrl = data?.sprites?.front_default;

  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          width="300px"
          className="pokemon"
          onClick={handleClick}
        />
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Card;
