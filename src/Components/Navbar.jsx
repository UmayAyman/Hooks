import React, { useEffect } from 'react'

const Navbar = ({color}) => {
// CASE 1: Run on every render
useEffect(() => {            /*alert will show only after page reloading, almost use in every web or app */
    alert ("hey! I'll run on every render")
  })

// CASE 2: Run only on first render
  useEffect(() => {
    alert ("hey! Welcome to my page. This is the first render")
  }, [])

//CASE 3: Run only when certain value's changed
useEffect(() => {
  alert ("hey! I'm running because color was changed")
}, [color])

//CASE 4:Example of Cleanup Function
useEffect(() => {
  alert("hey! Welcome to my page. This is the first render of app.jsx")

  return () => {          /* run only when the navbar component will unmount (comment or removed) from app.jsx or any other file where it exists*/
    alert("component was unmounted")
  }
}, [])


return (
    <div>I'm a Navbar of {color} color hehe:</div>
)
}
export default Navbar
