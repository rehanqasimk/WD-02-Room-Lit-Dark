import React, { useState } from 'react';

function Room() {
    const [isLit, setLit] = useState(true);
    let [age, increaseAge] = useState(45);
    
 console.log(age);
  return (
    <div>
        <h1> The Room is { isLit ? "Lit":"Dark"} </h1>
        <button onClick={()=> setLit(!isLit)}>
            Click to change
        </button>
        <br />
        <h1>The AGE is {age}</h1>
        <button onClick={()=> increaseAge(++age)}>
            Increase Age
        </button>
    </div>
  );
}

export default Room;
