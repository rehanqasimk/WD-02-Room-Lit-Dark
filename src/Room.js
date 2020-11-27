import React, { useState } from 'react';
import "./Room.css"

function Room() 
{
    const [isLit,setLit] = useState(true);
    return (
        <div className={`room ${isLit?'lit':'dark'}`}>
            <h1>The Room is : { isLit ? "Lit": "dark"} </h1>
            <button onClick={() => setLit(!isLit)}>
                Click to toggle
            </button>
        </div>
    );
}

export default Room;
