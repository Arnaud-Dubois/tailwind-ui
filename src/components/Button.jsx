import React from 'react'

export default ({ outline, title, click }) => {
  return (
    <button onClick={click} className={
        outline
        ? "m-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        : "m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    }>
      {title}
    </button>
  )
}
