import React, { useContext } from 'react'
import { myBasket } from './App'

function Question() {
  const [currentQUestion, setCurrentQuestion] = React.useState(0)
  const [optionChoosen, setOptionChoosen] = React.useState("")
  const {mySetPage, myScore, mySetScore} = useContext(myBasket)
const quizData = 
[
    {
        title: "Which of the following command is used to create react-js-app ?",
        A: "npx create-react-app appname",
        B: "npm install create-react-app",
        C: "npx install create-react-app -g",
        D: "install - l create-react-app",
        Answer: "A"
    },
    {
        title: "In React.js which one of the following is used to create a class for Inheritance ?",
        A: "Create",
        B: "Extends",
        C: "Inherits",
        D: "Delete",
        Answer: "B"
    },
    {
        title: "What is the default port number in which the application run ?",
        A: "3000",
        B: "8080",
        C: "5000",
        D: "3030",
        Answer: "A"
    },
    {
      title: "Which of the following valid component return type of React ?",
      A: "2",
      B: "1",
      C: "5",
      D: "3",
      Answer: "B"
  },
  {
    title: "Which of the following is a way to handle data in React.js ?",
    A: "State & Props",
    B: "Services & Components",
    C: "State & Services",
    D: "State & Component",
    Answer: "A"
}
]
function nextBtn()
{
  //Logic to collect the score
  if(optionChoosen === quizData[currentQUestion].Answer)
  {
    mySetScore(myScore+1)
  }
  //Logic to go to next question
  setCurrentQuestion(currentQUestion+1)
}

function submitBtn()
  {
    if(optionChoosen === quizData[currentQUestion].Answer)
      {
        mySetScore(myScore+1)
      }

   mySetPage("result")
  }
  return (
    <div style={{margin: "25px"}}>
     <h2>Q: {quizData[currentQUestion].title}</h2>
     A: <button className='btn btn-outline-success' onClick={function()
      {
        setOptionChoosen("A")
      }
     }>{quizData[currentQUestion].A}</button><br/><br/>
     B: <button className='btn btn-outline-success' onClick={function()
      {
        setOptionChoosen("B")
      }
     }>{quizData[currentQUestion].B}</button><br/><br/>
     C: <button className='btn btn-outline-success' onClick={function()
      {
        setOptionChoosen("C")
      }
     }>{quizData[currentQUestion].C}</button><br/><br/>
     D: <button className='btn btn-outline-success' onClick={function()
      {
        setOptionChoosen("D")
      }
     }>{quizData[currentQUestion].D}</button><br/><br/>
     {currentQUestion === quizData.length-1 ? <button className='btn btn-outline-success' onClick={submitBtn}>Submit</button> : <button className='btn btn-outline-warning' onClick={nextBtn}>Next</button>}
    

    </div>
  )
}

export default Question