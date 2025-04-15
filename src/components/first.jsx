import { useState, useEffect } from 'react';
import '../styles/first.css';


function First() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Pikachu" width="300px" className="pikac"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default First;

