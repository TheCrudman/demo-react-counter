import { useState } from 'react'
import Button from './components/Button'



function App() {
  

  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])

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
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <div>
        <div className="bg-white mx-8 px-10 py-8 overflow-hidden rounded-lg shadow">
          <h1 className="text-3xl">Counter: {count}</h1>
          <button
            onClick={() => {
              history.unshift(count)
              reset()
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 mt-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save total
          </button>

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
        <div className="mx-8 px-10 py-8 w">
          <h2 className="text-xl">Count History (latest first)</h2>
          <ol className="list-decimal list-inside" reversed>
            {history.map((value) => (
              <li className="" key={value}>
                {value}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
