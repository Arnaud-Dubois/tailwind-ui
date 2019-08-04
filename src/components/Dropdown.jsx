import React, { useState } from 'react'

export default ({ options }) => {
  const [open, toggleOpen] = useState(false)
  const inputOptions = options

  return (
    <>
      <button onClick={() => toggleOpen(!open)} className="bg-red-400 text-white p-4 rounded-sm">
        Dropdown
      </button>
      { open &&
        <ul className="bg-indigo-400 inline-block absolute">
          { inputOptions &&
            inputOptions.map( option =>
              <li>
                <button onClick={() => toggleOpen(!open)} className="p-4 bg-yellow-400 w-full">{option}</button>
              </li>
            )
          }
          
        </ul>
      }
    </>
  )
}
