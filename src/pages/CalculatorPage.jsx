import React, { useState } from 'react'
import ButtonPanel from '../components/calculator/ButtonPanel';
import Display from '../components/calculator/Display';

function CalculatorPage() {
  const [input, setInput] = useState("");
  
  const handleButtonClick = (value) => { 
    if (value == "="){
      try {
        let pangkatBoy = input;

        pangkatBoy = pangkatBoy.replace(/\^/g, "**")

        if (pangkatBoy.includes("/0")) {
          setInput("Error Boy: Gabisa dibagi nol")
        } else {
          setInput(eval(pangkatBoy).toString())
        }
      } catch (e) {
        setInput("Error Boy")
      }
    } else if (value == "AC") {
      setInput("")
    } else if (value == "DEL") {
      setInput(input.slice(0, -1))
    } else {
      setInput(input + value)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-80">
        <Display value={input} />
        <ButtonPanel onButtonClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default CalculatorPage