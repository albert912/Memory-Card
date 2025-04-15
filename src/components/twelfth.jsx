import { useState, useEffect } from 'react';
import '../styles/twelfth.css';


function Twelfth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/greninja')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Greninja" width="300px" class="gren"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Twelfth;

