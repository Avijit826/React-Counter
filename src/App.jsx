import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple Counter App</h1>
      <div className='card'>
        <button>count is {count}</button>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <button onClick={() => setCount((count) => (count = 0))}>
          {' '}
          reset{' '}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
      </div>
    </>
  )
}

export default App
