import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./styles/Pokedex.css"

const Pokedex = () => {

  const nameTrainer = useSelector(store => store.nameTrainer)

  const {
    handleSubmit, 
    handleChangeSelect, 
    types, 
    pokemonsInPage, 
    handlePreviusPage, 
    handleNextPage, 
    pagesInBlock,
    setCurrentPage,
  } = usePokedex()

  return (
    <main className='Pokedex'>
      <p className='title'><span>Welcome {nameTrainer}</span>, here you can find information about of your favorite pokemon</p>
      <form className='container_search' onSubmit={handleSubmit}>
        <div className='poke_search'>
          <input className='poke_input' type="text" id="pokemonName" placeholder='search your pokemon' />
          <button className='poke_btn'>Search</button>
        </div>
        <select className='poke_change' onChange={handleChangeSelect}>
          <option className='poke_filter' value="">All Pokemon</option>
          {
            types.map(type => <option key={type.url}>{type.name}</option>)
          }
        </select>
      </form>
      <section className='Pokedex__list'>
        {
          pokemonsInPage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
        }
      </section>
      <section className='pagination_container'>
        <ul className='pagination_poke'>
          <li className='poke_arrow' onClick={handlePreviusPage} >{"<<"}</li>
          <li className='poke_more' onClick={() => setCurrentPage(1)} >...</li>
          {
            pagesInBlock.map(page => <li className='poke_page' onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
          }
          <li className='poke_more' onClick={() => setCurrentPage(lastPage)}>...</li>
          <li className='poke_arrow-der' onClick={handleNextPage} >{">>"}</li>
        </ul>
      </section>
    </main>
  )
}

export default Pokedex