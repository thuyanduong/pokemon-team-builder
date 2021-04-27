import PokemonCard from './PokemonCard'

function PokemonCollection(props){
  return (
    <div>
    <h3>Pokemon Collection:</h3>
      {props.pokemon.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} action={props.addPokemonToTeam}/>)}
    </div>
  )
}

export default PokemonCollection