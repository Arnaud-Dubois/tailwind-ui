import React from 'react';
import Button from './Button';

export default () => {
  return (
    <div className="p-4 w-1/4 m-4 bg-white text-black border-black border-solid border rounded inline-block shadow-2xl">
      <h4 className="p-4 text-lg font-bold">This is a CARD</h4>
      <p className="my-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam mollitia dolorum suscipit possimus illo provident in atque nobis. Ipsa.
      </p>
      <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta possimus temporibus dignissimos quasi sequi ex blanditiis, inventore officiis facilis alias, ipsam, laborum non repudiandae molestiae beatae odit harum repellendus?
      </p>
      <Button title="Simple btn" />
      <Button title="Outline btn" outline />
    </div>
  )
}
