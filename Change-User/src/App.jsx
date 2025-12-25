import React, {useState} from "react";

const App = () => {

  const arr = ["Alice", "Bob", "Charlie", "Diana"];

  const [username, setUsername] = useState(0);

  return (

    <div>
      <h1>Current User: {arr[username]}</h1>
      <button onClick={() => {
        if (username < arr.length - 1) {
          setUsername(username + 1);
        }
      }}>
        Change User
      </button>
    </div>

  )

}

export default App;