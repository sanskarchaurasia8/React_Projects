import React, { useState } from "react";

const App = () => {

  const [num , setnum] = useState(0);

  return (

  <div>

   <div className="box">
    {num}
   </div>

     <button onClick={()=>{
      const rdm = Math.floor(Math.random() * 100) + 1;
      setnum(rdm);
     }}>Ramdom Number</button>

  </div>

  );
}

export default App;