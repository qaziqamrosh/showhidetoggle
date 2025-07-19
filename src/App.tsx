import { useState } from "react"
import User from "./user";

function App() {
  const [display,setDisplay]=useState(false);
  return (
    <>
    {
      display?<User></User>:null
    }
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App
