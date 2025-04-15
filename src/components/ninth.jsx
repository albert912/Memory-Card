import { useState, useEffect } from 'react';
import '../styles/ninth.css';


function Ninth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Mewtwo" width="300px" class="mew"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Ninth;

