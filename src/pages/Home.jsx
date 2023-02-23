import React from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/layout/Footer'
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice'
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainerGlobal(nameTrainer))
  }

  return (
    <main className='poke_main'>
      <section className='poke_home-home'>
        <div className='poke_home-img'>
          <img src="/images/pokedex.png" alt="" />
        </div>
        <h2 className='poke_home-title'>Hello trainer!</h2>
        <p className='poke_home-subtitle'>Give me your name to start!</p>
        <form className='poke_home-form' onSubmit={handleSubmit}>
          <input className='poke_home-input' id='nameTrainer' type="text" placeholder='your name...' required />
          <button className='poke_home-btn'>Start</button>
        </form>
      </section>
      <Footer />
    </main>
  )
}

export default Home