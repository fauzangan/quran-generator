import React from 'react'
import { FaRedo } from 'react-icons/fa'

function Button({label, onClick, type = "button", color = "blue"}) {
  const baseStyles = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center'
  const colorStyles = {
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
    red: 'bg-red-500 hover:bg-red-700 text-white'
  }
  return (
    <button type={type} className={`${baseStyles} ${colorStyles[color]}`} onClick={onClick}> 
      <FaRedo className="mr-2" />
      {label}
    </button>
  )
}

export default Button