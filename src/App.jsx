import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonProfile from './lab01/PersonProfile'
import {data} from './lab01/module-data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <article>
        <h1 className="read-the-docs">
          Click on the Vite and React logos to learn more
        </h1>
      </article>


      <div className="app">
      <h1>People List:</h1>
      <div className="person-list">
        {data.map((person) => (
          <PersonProfile key={person.id} person={person} />
        ))}
      </div>
    </div>
    </>
  )
}


export default App