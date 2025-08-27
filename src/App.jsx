import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div>
      <h1 className='text-4xl text-white font-extrabold'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App