import { useState } from 'react'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterC from './CounterC';
import CounterF from './CounterF';
import ListManager from './ListManager';
import ColorBox from './ColorBox';
import NoteManager from './NoteManager';
import TodoList from './TodoList';

function App() {
  const [count, setCount] = useState(0)
  const [step,setStep]=useState(0)

  return (
    <>
      <Header />
      <CounterC counter={10} />
      <input type="number" value={step} onChange={
        (e) => setStep(e.target.value)

      } /> 
      <CounterF step={step} />
      <ListManager />
      <ColorBox />
      <NoteManager initialNotes={[10, 15, 20]} />
      <TodoList initialTasks={[{ name: 'Finir le projet React', priority: 'Baisse', completed: false }, { name: 'Préparer le repas', priority: 'Moyenne', completed: true },{ name: 'Aller courir', priority: 'Moyenne', completed: true }]} />
      <Footer />

    </>
  )
}

export default App
