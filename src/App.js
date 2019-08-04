import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring'
import './tailwind.css';
import './App.css';
import Modal from './components/Modal';
import Collapse from './components/Collapse';
import Dropdown from './components/Dropdown';
import Spinner from './components/Spinner';
import Progress from './components/Progress';
import Button from './components/Button';
import Toast from './components/Toast';

function App() {
  const [modal, setModal] = useState(false)
  const [toast, createToast] = useState(false)
  
  const transitions = useTransition(modal, null, {
    from: { opacity: 0, marginTop: '-15px' },
    enter: { opacity: 1, marginTop: '0' },
    leave: { opacity: 0, marginTop: '-15px' }
  })

  return (
    <div className="App">
      <div className="container mx-auto">
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

      <h2 className="my-4 text-3xl">Dropdown</h2>
      <Dropdown options={['Banana','Oasis','Champagne']} />

      <h2 className="my-4 text-3xl">Spinner</h2>
      <Spinner />

      <h2 className="my-4 text-3xl">Progress</h2>
      <Progress progress="90%" />
      <Progress progress="10%" />
      <Progress progress="30%" />

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

      <h2 className="my-4 text-3xl">Toast</h2>
      <button onClick={() => createToast(true)} className="bg-yellow-400 p-4 m-8 rounded">Call Toast</button>
      <Toast title={"Toasty !"} notification={"It's hot, right now"} toasted={toast} />
    </div>
  );
}

export default App;
