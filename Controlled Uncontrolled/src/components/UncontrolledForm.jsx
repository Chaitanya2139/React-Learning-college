import React, { useRef } from 'react';


const UncontrolledForm = () => {
    const inputRef = useRef();
    const handleSubmit = () => {
        alert(`Your name is: ${inputRef.current.value}`);
    };
  return (
    <div>
        <h1>Uncontrolled Form</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledForm
