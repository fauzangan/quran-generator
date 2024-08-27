import React from 'react'
import Button from './Button'

function ButtonPanel({ onButtonClick }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {["AC", "DEL", "(", ")"].map((value) => ( 
        <Button 
          key={value}
          value={value}
          onClick={onButtonClick}
          isSpecial={true}
        />
       ))}
       {["7", "8", "9", "/"].map((value) => (
        <Button 
          key={value}
          value={value}
          onClick={onButtonClick}
        />
       ))}
      {['4', '5', '6', '*'].map((value) => (
        <Button
          key={value}
          value={value}
          onClick={onButtonClick}
        />
      ))}
      {['1', '2', '3', '-'].map((value) => (
        <Button
          key={value}
          value={value}
          onClick={onButtonClick}
        />
      ))}
      {["0", ".", "^", "+"].map((value) => (
        <Button 
          key={value}
          value={value}
          onClick={onButtonClick}
          isSpecial={value == "^"}
        />
      ))}
      <Button 
        value="="
        onClick={onButtonClick}
        className="col-span-4 bg-blue-500 text-white p-4 rounded-lg text-xl font-bold"
      />
    </div>
  )
}

export default ButtonPanel