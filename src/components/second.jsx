import { useState, useEffect } from 'react';
import '../styles/second.css';


function Second() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/charizard')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Charizard" width="300px" class="chari"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Second;

