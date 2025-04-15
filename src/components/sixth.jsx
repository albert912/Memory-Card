import { useState, useEffect } from 'react';
import '../styles/sixth.css';


function Sixth() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/meowth')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); 

  return (
    <div>
      {data ? (
        <img src={data.sprites.front_default} alt="Meowth" width="300px" class="meo" />
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Sixth;

