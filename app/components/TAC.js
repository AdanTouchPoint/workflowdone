// Modal.js
import React from "react";
import "./modal.css"; // Importa tus estilos CSS
const TAC = ({ showTAC, setShowTAC, states }) => {
  const closeModal = () => {
    setShowTAC(false);
  };
  let tittle = "Terms & Conditions";
  let button = "close";
  let message = `1. Introduction: Welcome to https://stop-swamping-gps.vercel.app/. By accessing our website, you agree to these Terms and Conditions.
  2. Privacy: We are committed to protecting your privacy. We do not collect personal email addresses or other personal information except for the purpose of analysing site traffic, which involves logging the time and date of visits.
  3. Use of Email Proxy Technology: Our platform utilises email proxy technology, allowing users to receive responses from entities they contact through our website. Please note that replies received via this technology are from the contacted entities and do not constitute communication from our organisation
  4. User Obligations: You agree to use our website lawfully and refrain from any activity that could damage, disable, or overburden the site.
  5. Disclaimer of Warranties: Our services are provided on an "as is" and "as available" basis without warranties of any kind.
  6. Limitation of Liability: We shall not be liable for any damages arising from your use of our website or services.
  7. Governing Law: These Terms and Conditions are governed by the laws of Australia and any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Australia.
  8. Changes to Terms: We reserve the right to modify these terms at any time, with changes effective upon posting to the website.`;
  const text = message.split("\n");
  return (
    <div>
      <div
        className={`modal-overlay-tac ${showTAC ? "active" : ""}`}
        onClick={closeModal}
      >
        <div
          className={`modal-content-tac ${showTAC ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{tittle}</h2>
          <p>
            {" "}
            {text.map((el, index) => (
              <div key={index}>
                {" "}
                {el} <br />{" "}
              </div>
            ))}
          </p>
          <div >
        <button onClick={closeModal}>{button}</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default TAC;
