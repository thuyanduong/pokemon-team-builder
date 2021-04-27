import {useEffect, useState} from 'react'
import PokemonTeam from './PokemonTeam'
import Searchbar from './Searchbar'
import PokemonCollection from './PokemonCollection'
import ResetButton from './ResetButton'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [teamPokemon, setTeamPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/pokemon")
    .then(res => res.json())
    .then(data => {
      setAllPokemon(data)
    })
  },[])

  function addPokemonToTeam(pokemon){
    if(teamPokemon.length < 6) {
      setTeamPokemon(prevTeam => {
        return [...prevTeam, pokemon]
      })
    }
  }

  function removePokemonFromTeam(pokemon){
    // console.log("hello")
    return setTeamPokemon(prev => prev.filter(p => p!== pokemon))
  }

  function filterAllPokemon(){
    return allPokemon.filter(pokemon => !teamPokemon.includes(pokemon)).filter(pokemon => pokemon.name.includes(searchTerm))
  }

  return (
    <div className="App">
      <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
      <PokemonTeam pokemon={teamPokemon} removePokemonFromTeam={removePokemonFromTeam}/>
      <ResetButton setTeamPokemon={setTeamPokemon}/>
      <br />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PokemonCollection pokemon={filterAllPokemon()} addPokemonToTeam={addPokemonToTeam}/>
    </div>
  );
}

export default App;
