import React from 'react';
import Homepage from './Homepage.js'
import Question from './Question.js'
import Result from './Result.js'

export const myBasket = React.createContext()

function App() {
  const [page,setPage] = React.useState("homepage")
  const [score, setScore] = React.useState(0)

  return (
    <div>
      <myBasket.Provider value={{mySetPage: setPage, myScore: score, mySetScore: setScore}}>
      {page=== "homepage" && <Homepage/>}
      {page=== "question" && <Question/>}
      {page=== "result" && <Result/>}
      </myBasket.Provider>
     
      
     
    </div>
  )
}

export default App