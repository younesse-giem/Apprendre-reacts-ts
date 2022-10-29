import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProjectsPage from './projects/ProjectsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="container">
     <ProjectsPage />

   </div>
  )
}

export default App
