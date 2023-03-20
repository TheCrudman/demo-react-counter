import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const increment = (step) => {
    console.log('here')
    setCount(count + step)
  }

  const decrement = (step) => {
    console.log('here')
    setCount(count - step)
  }

  const reset = () => {
    
    setCount(0)
  }
  return (
    <div className="grid place-items-center h-screen bg-slate-200">
      <div className="bg-white px-16 py-8 overflow-hidden rounded-lg shadow">
        <h1 className="text-3xl">Counter: {count}</h1>

        <h2 className="text-xl mb-2 mt-4">Add</h2>
        <Button step={1} increment={increment} />
        <Button step={10} increment={increment} />
        <Button step={100} increment={increment} />
        <h2 className="text-xl mb-2 mt-4">Subtract</h2>
        <Button step={1} decrement={decrement} />
        <Button step={10} decrement={decrement} />
        <Button step={100} decrement={decrement} />
        <p className="text-center mt-4">
          {' '}
          <a onClick={reset} className="cursor-pointer">
            Reset
          </a>
        </p>
      </div>
    </div>
  )
}

export default App