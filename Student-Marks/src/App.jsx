import React, {useState} from "react";

const App = () => {

const [marks, setMarks] = useState([45, 67, 23, 89, 12, 90, 33, 56]);

const graceStudent = () => {
  const updateMarks = marks.map((mark) =>{
    if(mark < 33){
      return mark + 5;
    }
    return mark;
  })
  setMarks(updateMarks);
}

return(

<div>
  {marks.map(function(elem, idx){
    return <h1 key={idx}>Student {idx + 1}: {elem}</h1>
  })}

  <button onClick={graceStudent}>Give them grace</button>
</div>

  );

};

export default App;