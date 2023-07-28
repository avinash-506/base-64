import React, { useState } from "react";
import "./App.css";
import EncryptComponent from "./Component/Encrypt";
import DecryptComponent from "./Component/Decrypt";


function App() {
  const [isEncryptMode, setIsEncryptMode] = useState(true);


  const handleEncryptClick = () => {
    setIsEncryptMode(true);
  };

  const handleDecryptClick = () => {
    setIsEncryptMode(false);
  };

  return (
    <div className="App container ">
      <div>
        <p className="display-2">Base64 </p>
      </div>
      <div className="d-flex justify-content-center mx-auto p-2 pt-4">
        <div className="text-center pe-3">
          <button
            className={`btn  ${
              isEncryptMode ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={handleEncryptClick}
          >
            Encrypt
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={handleDecryptClick}
            className={`btn ${
              isEncryptMode ? "btn-outline-primary" : "btn-primary"
            }`}
          >
            Decrypt
          </button>
        </div>
      </div>

      {isEncryptMode ? <EncryptComponent /> : <DecryptComponent />}
    </div>
  );
}

export default App;
