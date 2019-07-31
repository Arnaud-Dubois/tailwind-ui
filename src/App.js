import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'
import './tailwind.css';
import './App.css';
import Modal from './components/Modal';
import Collapse from './components/Collapse';
import Button from './components/Button';

function App() {
  const [modal, setModal] = useState(false)
  
  const transitions = useTransition(modal, null, {
    from: { opacity: 0, marginTop: '-15px' },
    enter: { opacity: 1, marginTop: '0' },
    leave: { opacity: 0, marginTop: '-15px' }
  })

  return (
    <div className="App">
      
      <a className="bg-indigo-500 hover:bg-indigo-700 p-4 text-white rounded-lg" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">tailwindcss.com</a>
      
      <h2 className="my-4 text-3xl">Modal</h2>
      <Button title="Toggle modal" click={() => setModal(true)} />
      
      {
        transitions.map(({ item, key, props}) =>
          item &&
          <animated.div key={key} style={props} >
            <Modal isModal={() => setModal(!modal)} />
          </animated.div>
        ) 
      }

      <h2 className="my-4 text-3xl">Collapse</h2>
      <Collapse title="My collapse">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe
          consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus.
          Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
      </Collapse>


      <Collapse title="My second collapse">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe
          consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus.
          Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe
          consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus.
          Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
      </Collapse>

      <Collapse title="My second collapse">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe
          consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus.
          Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eos, mollitia rem illum dicta perspiciatis sunt repellendus saepe
          consequuntur dolore est nam eaque assumenda fuga dolor sed accusamus.
          Corrupti, cum fuga ratione iusto necessitatibus expedita maxime iste quis mollitia. Aliquam, similique.
      </Collapse>

    </div>
  );
}

export default App;
