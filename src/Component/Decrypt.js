import React, { useState } from 'react';
import { Buffer } from 'buffer';
import './weben.jpg'
function DecryptComponent() {
   const [data, setData] = useState("");
   const [base64d, setBase64d] = useState("");

    const dencryptfunc = (e) => {
        e.preventDefault();
     const buff = Buffer.from(data,"base64");
     const text = buff.toString("ascii");
     setBase64d(text);
   };

   return (
     <div>
       <h2>Decrypt</h2>
       <form className="mt-4" onSubmit={dencryptfunc}>
         <div className="w-25 justify-content-center mx-auto">
           <input
             className="form-control "
             type="text"
             value={data}
             onChange={(e) => setData(e.target.value)}
             placeholder="Enter your text"
           />
         </div>
         <button className="btn btn-success mt-4" type="submit">
           Done
         </button>

         <p>Decrypted Value:</p>
         <p>{base64d}</p>
       </form>
      
     </div>
   );
}

export default DecryptComponent;
