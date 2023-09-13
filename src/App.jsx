import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Players from './Components/Players/Players'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto'>
      <Header></Header>
      <Players></Players>
      </div>
    </>
  )
}

export default App
