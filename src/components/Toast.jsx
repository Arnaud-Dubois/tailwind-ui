import React from 'react'

export default ({ title, notification, toasted }) => {
  let toast = toasted

  return (
    <>
    { toast &&
      <div className="bg-black text-white fixed right-0 bottom-0 m-8 p-4 inline-block rounded">
        <div>{title}</div>
        <div>{notification}</div>
      </div>
    }
    </>
  )
}
