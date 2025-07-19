import { useState } from "react"

function App() {
  const [display,setDisplay]=useState(false);
  return (
    <>
    {
      display?<h1>Toggle is on</h1>:null
    }
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App
