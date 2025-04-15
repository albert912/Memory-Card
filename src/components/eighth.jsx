import { useState, useEffect } from 'react';
import '../styles/eighth.css';

function Eighth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Snorlax" width="300px" class="sno"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Eighth;

