import React, { useState } from 'react'
import {createPortal} from "react-dom";
import Modal from './components/Modal/Modal';
import './App.css'

const App = () => {
  const [showModal ,setShowModal] = useState(false);
  return (
    <div className={showModal ?  'App backdrop' : 'App' }>
     <button 
      onClick={()=> setShowModal(true)} 
      className={showModal ? 'open-btn disabled' : 'open-btn' } 
      disabled={showModal}
      >
        Open Modal
      </button>
     {
      showModal && 
      createPortal(
        <Modal setShowModal={setShowModal}/>,
         document.body
      )
     }

    </div>
  )
}

export default App