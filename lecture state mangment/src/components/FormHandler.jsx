import React, { useState } from 'react';
function FormHandler() {
    const [text, setText] = useState('');
    function handleChange(event) {
        setText(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted with text: ' + text);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormHandler;