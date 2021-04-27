import PokemonCard from './PokemonCard'

function PokemonTeam(props){
  return (
    <div>
    <h3>Team:</h3>
      {props.pokemon.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} action={props.removePokemonFromTeam}/> )}
    </div>
  )
}

export default PokemonTeam