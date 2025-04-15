import { useState, useEffect } from 'react';
import '../styles/third.css';


function Third() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Squirtle" width="300px" class="squi"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Third;

