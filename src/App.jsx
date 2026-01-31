import { useState } from 'react'
import './App.css'
import { format } from "date-fns"

function App() {
  const now = new Date ()

  return (
    <>
<div>
      <p>{format (now, "yyyy-MM-dd HH:mm:ss")}</p>
    </div>
    </>
  )
}
export default App
