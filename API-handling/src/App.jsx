// import React from "react";
import axios from "axios";
import User from "./components/User";
import { useState } from "react";


const App = () => {

  const [allData, setAllData] = useState([])

  const Getdata = async() => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setAllData(response.data)
    
  }
  return (
    <div>
      <button onClick={Getdata}>Get Data</button>

    <div className="all-cards">
      {allData.map(function (elem , idx){
        return <div key={idx}>
          <User elem={elem} />
        </div>
      })}
    </div>
      
    </div>
  );
};

  export default App;