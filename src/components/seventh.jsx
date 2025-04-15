import { useState, useEffect } from 'react';
import '../styles/seventh.css';


function Seventh() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/eevee')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Eevee" width="300px" class="eev"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Seventh;

