import { useState } from 'react'
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Fifth from './components/fifth';
import Sixth from './components/sixth';
import Seventh from './components/seventh';
import Eighth from './components/eighth';
import Ninth from './components/ninth';
import Tenth from './components/tenth';
import Eleventh from './components/eleventh';
import Twelfth from './components/twelfth';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">



   <h1 className="title">Memory Game</h1> 

 <p className="desc">Get points by clicking on an image but don't click on any more than once!</p>

 <span className="scr">Score:</span>

 <span className="bscr">Best Score:</span>


<div className="card-container">

  
{/*API IMAGE TEST!! */}
  <div className="card">

  <First className="pika" />



 {/*  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="pikachu" width="300px" class="pikachu" />*/}
  </div>




  <div className="card">

<Second  className="chari" />


 {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="charizard" width="300px" class="charizard"/> */}

  </div>

  <div className="card">

    <Third className="squirtle" />

 {/* 

<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="squirtle" width="300px" class="squirtle"/> */}

  </div>

  <div className="card">

<Fourth className="bulbasaur" />

 {/* 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur" width="300px" class="bulbasaur"/> */}

  </div>

  <div className="card">

    <Fifth className="jiggy" />


 {/* 
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png" alt="jigglypuff" width="300px" class="jigglypuff"/> */}

  </div>

  <div className="card">

<Sixth className="meowth" />

 {/* 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png" alt="meowth" width="300px" class="meowth"/> */}

  </div>

  <div className="card">

<Seventh className="eevee" />

 {/* 

  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" alt="eevee" width="300px" class="eevee"/> */}

  </div>

  <div className="card">

<Eighth className="snorlax" />

 {/* 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png" alt="snorlax" width="300px" class="snorlax"/> */}

  </div>

  <div className="card">

<Ninth className="mewtwo" />

 {/* 
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="mewtwo" width="300px" class="mewtwo"/> */}

  </div>

  <div className="card">

    <Tenth className="lucario" />


 {/* 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png" alt="lucario" width="300px" class="lucario"/> */}

  </div>

  <div className="card">

    <Eleventh className="gengar" />


 {/* 
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="gengar" width="300px" class="gengar"/> */}

  </div>

  <div className="card">

<Twelfth className="greninja" />

 {/* 
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png" alt="greninja" width="300px" class="greninja"/> */}

  </div>



</div>








   </div>
  )
}

export default App
