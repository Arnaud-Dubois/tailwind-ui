import React from 'react';
import Button from './Button';

export default ({ isModal }) => {
    return (
    <>
        <div className="z-10 bg-white rounded w-1/2 p-8 my-32 container mx-auto relative shadow-lg">
            <button className="top-0 right-0 my-3 mx-5 absolute" onClick={isModal} >Close</button>
            <h3 className="my-8 text-3xl" >Modal Title</h3>
            <p className="my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus. Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
            </p>
            <Button click={isModal} title="Close" />
        </div>
        <div onClick={isModal} className="z-0 bg-black opacity-75 w-screen h-screen fixed inset-0"></div>
    </>
  )
}
