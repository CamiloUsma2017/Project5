import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"
import styled, { keyframes } from "styled-components"

const animacion = keyframes`
0%{
    transform: translateY(0);
}
50%{
    transform: translateY(12px);
}
100%{
    transform: translateY(0);
}`;


const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

  const { id } = useParams()

  const getPercentBar = (stat) => {
    const percent = (stat * 100) / 255
    return `${percent}%`
  }

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className='poke_scan-container'>
      <section className='poke_scan'>
        {/* Parte superior */}
        <section className='poke_scan-info'>
          <div className='poke_scan-img1'>
            <img className='' src="/images/consola.png" alt="" />
            <div className='poke_scan-img2'>
              <Animation>
                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
              </Animation>
            </div>
            <h2 className='poke_scan-name1'># {pokemon?.id}</h2>
            <Animation>
            <h2 className='poke_scan-name2'>{pokemon?.name}</h2>
            </Animation>
          </div>

        </section>
        <section className='pokemon_stats'>
          <h2 className='pokemon_stats-title'>Stats</h2>
          <section className='pokemon_stats-info'>
            {pokemon?.stats.map((stat) => (
              <article className='pokemon_stat' key={stat.stat.name}>
                <div className='pokemon_stats-header'>
                  <h4 className='pokemon_stats-name'>{stat.stat.name}</h4>
                  <h5 className='pokemon_stats-value'>{stat.base_stat}/200</h5>
                </div>
                <div className='pokemon_stats-bar'>
                  <div className='pokemon_stats-barGray'>
                    <div className='pokemon_stats-barProgress' style={{ width: getPercentBar(stat.base_stat) }}></div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Body */}
          <section>
            <div className='poke_scan-properties'>
              <div className='poke_scan-complex1'>
                <div className='poke_scan-weight'>
                  <h5>Weight</h5>
                  <h4>{pokemon?.weight}</h4>
                </div>
                <div className='poke_scan-height'>
                  <h5>Height</h5>
                  <h4>{pokemon?.height}</h4>
                </div>
              </div>
              <div className='poke_scan-complex2'>
                <div>
                  <h3>Type</h3>
                  {pokemon?.types.map((type) => (
                    <div key={type.type.name}>
                      <span>{type.type.name}</span>
                    </div>
                  ))}
                </div>
                <div className='poke_scan-skills'>
                  <h3>Skills</h3>
                  <div>
                    {pokemon?.abilities.map((ability) => (
                      <div key={ability.ability.name}>
                        <span>{ability.ability.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Stats */}

    </main>
  );
}

export default Pokemon
export const Animation = styled.div`
animation: ${animacion} 3s linear infinite;`
