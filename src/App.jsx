import { useState } from 'react'
import './App.css'
import WhatApp from './Pages/WhatApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <WhatApp/>
    </div>
  )
}

export default App
