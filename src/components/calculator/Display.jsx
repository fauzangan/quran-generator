import React from 'react'

function Display({ value }) {
  return (
    <div className="text-right mb-4 p-2 bg-gray-200 rounded-lg text-2xl font-mono">
      {value || '0'}
    </div>
  )
}

export default Display