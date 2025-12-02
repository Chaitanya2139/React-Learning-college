import React from 'react'
import { useState } from "react";

const ControlledForm = () => {
    const [name, setName] = useState("");
    return (
    <div>
        <h1>Controlled Form</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Your name is: {name}</p>
    </div>
    )
}

export default ControlledForm
