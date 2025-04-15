import { useState, useEffect } from 'react';
import '../styles/fourth.css';


function Fourth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Bulbasaur" width="300px" class="bulba"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Fourth;

