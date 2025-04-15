import { useState, useEffect } from 'react';
import '../styles/fifth.css';


function Fifth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Jigglypuff" width="300px" class="jiggy"/>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Fifth;

