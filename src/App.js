import './App.css';
import { AlertButton } from "./components/AlertButton"
import { InputWithClean } from "./components/InputWithClean"
import React, {useState} from "react"


function App() {
//state1
//state2
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
//functions to pass to children as props

  const ChangeName = (event) => {
    setName(event.target.value)
      // console.log(event.target.value)
  }

  const ChangeSurname = (event) => {
    setSurname(event.target.value)
  }

  const CleanName = () => {
    setName("")
  }

  const CleanSurname = () => {
    setSurname("")
  }

  const AlertClick = () => {
    alert(`Name: ${name}, Surname: ${surname}`)
    setName("")
    setSurname("")
  }
  
  return (
    <div className="App">
      <h1>Homework</h1>
      <InputWithClean value={name} onChange={ChangeName} onClean={CleanName} placeholder="Enter your name" />
      <InputWithClean value={surname} onChange={ChangeSurname} onClean={CleanSurname} placeholder="Enter your surname" />
      <AlertButton onClick={AlertClick}/>
    </div>
  );
}

export default App;
