import { useState, useEffect } from 'react';
import '../styles/eleventh.css';


function Eleventh() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/gengar')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Gengar" width="300px" class="gengar"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Eleventh;

