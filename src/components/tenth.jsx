import { useState, useEffect } from 'react';
import '../styles/tenth.css';


function Tenth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/lucario')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Lucario" width="300px" class="luc"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Tenth;

