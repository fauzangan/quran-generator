import React from 'react'

function Button({ value, onClick, isSpecial }) {
  const buttonStyle = isSpecial
  ? "bg-green-500 text-white"
  : "bg-gray-300"

  return (
    <button
      onClick={() => onClick(value)}
      className={`${value == "=" 
        ? `col-span-4 bg-blue-500 text-white p-4 rounded-lg text-xl font-bold` 
        : `${buttonStyle} p-4 rounded-lg text-xl font-bold`}`}
    >
      {value}
    </button>
  )
}

export default Button