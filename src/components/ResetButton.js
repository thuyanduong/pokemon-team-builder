function ResetButton(props){
    return (
    <div>
        <button onClick={()=>{props.setTeamPokemon([])}}>Reset Team</button>
    </div>
    )
}

export default ResetButton