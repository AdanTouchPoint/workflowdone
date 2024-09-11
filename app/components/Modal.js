// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
import { Open_Sans, Anton } from "next/font/google";
import PopupMessage from "./PopupMessage";

const anton = Anton(
  {
      subsets:['latin'],
      weight: '400',
      variable: '--font-anton'
      
  }
)
const open_sans = Open_Sans(
  {
      subsets:['latin'],
      weight: ['400', '600', '700', '800'],
      variable: '--font-open-sans'
  }
)
const Modal = ({modalRef, modalText, showModal, setShowModal, states,  setHideMain, setShowMap, mousePosition}) => {
  const closeModal = () => {
    setShowModal(false);
  };
  const next = (e) => {
    e.preventDefault();
    setShowModal(false)
    setShowMap(true)
    setHideMain(false)
  }
  const allowed = ["vics","nsws","sas"]
  const toMainPage = (states,allowed) =>  {
  const obj = allowed.includes(states)
  return obj
  }

 
  
  
  return (
    <div>
        {/* <div ref={modalRef} className={`modal-overlay ${showModal ? 'active' : ''} ${open_sans.variable}`} style={{ top: mousePosition.y, left: mousePosition.x }} onClick={closeModal}> */}
        <div ref={modalRef} className={`modal-overlay ${showModal ? 'active' : ''} ${open_sans.variable}`} onClick={closeModal}>

          <div
            className={`modal-content-own ${showModal ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`${anton.variable} ${anton.className}`}>{modalText.title}</h2>
                <p> 
                  {
                    PopupMessage(modalText.message)

                  }
                </p>
             <div>
              {
                !toMainPage(states,allowed) && (
                  <button  className="modal-button-red" onClick={closeModal}>{modalText.button}</button>
                )
              }
                {
              toMainPage(states,allowed) && ( 
                <button className="modal-button-green" onClick={next}> Take Action! </button>
              )
             }  
             </div> 
          </div>
        </div>
    </div>
  );
};

export default Modal;
