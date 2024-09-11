// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
const ModalPreMain = ({ modalPreMainText, showModalPreMain, setShowModalPreMain,states}) => {
  const closeModal = () => {
    setShowModalPreMain(false);
  };
    modalPreMainText.message= `Based on ${states}'s decision to not impose a state tax on health services in the next 2 years\n-Your chance to get a bulk billed GP is unchanged\n-Your gap fee to see a private GP is unchanged`
  const text = modalText.message.split('\n')
  return (
    <div>
      {showModalPreMain && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content-own"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{modalPreMainText.title}</h2>
                <p> { text.map((el,index)=> (
                   <div key={index}> {el} <br/> </div>
                ))}</p>
            <button onClick={closeModal}>{modalPreMainText.button}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPreMain;
