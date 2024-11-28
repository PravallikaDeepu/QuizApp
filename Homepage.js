import React, { useContext } from 'react'
import { myBasket } from './App'
function Homepage() {

    const {mySetPage} = useContext(myBasket)
    function goTo()
    {
        mySetPage("question")
    }
  return (
    <div>
        <button onClick={goTo}>Start Quiz</button>
    </div>
  )
}

export default Homepage