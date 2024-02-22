import React from 'react'
import "./Modal.css"
const Modal = ({setShowModal}) => {
  return (
    <div className='modal'>

    <button className='cross-btn' onClick={()=>setShowModal(false)}>X</button>
    <span id="emoji">✅</span>
    <p>Claimed Successfully</p>
    <p>You have claimed 5,00,000 practice chips for today. Try again tomorrow</p>
    <button onClick={()=>setShowModal(false)} className='close-btn'>Okay</button>

    </div>
  )
}

export default Modal