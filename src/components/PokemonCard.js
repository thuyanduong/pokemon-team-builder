function PokemonCard(props){
  // console.log(props)
  return (
    <div className="pokemon card" onClick={()=>props.action(props.pokemon)}>
      <div>
        <img alt={props.pokemon.name} src={props.pokemon.sprites.front}/>
      </div>
      {props.pokemon.name}
    </div>
  )
}

export default PokemonCard