import React, { useState } from "react";
import { Buffer } from "buffer";

function EncryptComponent() {
  const [text, setText] = useState("");
  const [base64d, setBase64d] = useState("");

    const encryptfunc = (e) => {
     e.preventDefault();
    const buff = Buffer.from(text);
    const base64data = buff.toString("base64");
    setBase64d(base64data);
  };

    return (
       <div>
       <h2>Encrypt</h2>
       <form className="mt-4" onSubmit={encryptfunc}>
         <div className="w-25 justify-content-center mx-auto">
           <input
             className="form-control "
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
             placeholder="Enter your text"
           />
         </div>
         <button className="btn btn-success mt-4" type="submit">
           Done
         </button>

         <p>Encrypted Value:</p>
         <p>{base64d}</p>
       </form>
      
     </div>

  );
}

export default EncryptComponent;
