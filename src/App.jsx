import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewStudents from './ViewStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1>Axios Library</h1>
<ViewStudents/>
    </>
  )
}

export default App;
