import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)           /* useState hook */
  const [color,setColor] = useState(0)

  useEffect(() => {            /* alert will show every time after we click on count and then the count will update */
    alert ("count was changed")
    setColor(color + 1)
  }, [count])

  // useEffect(() => {            /* we use the last two useEffect when we want to change a particular state or prop */
  //   alert("first was changed")
  // }, [first])
  
  return (
    <>
    {/* <Navbar color = {"navy " + "blue" + color }/>        color is a prop here */}
      <div>the count is {count}</div>
      <button onClick={() => {setCount(count+1)}}>Update Count</button>
    </>
  )

}
export default App
