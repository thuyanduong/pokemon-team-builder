function Searchbar(props){
  const {searchTerm, setSearchTerm} = props
  return (
    <input className="search" placeholder="Search..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
  )
}

export default Searchbar