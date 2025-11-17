import React from 'react'

import logoimage from '../../assets/react.svg'

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoimage} alt="Logo" className="logo-image" />
      {/* <h1 className="logo-text">MyApp</h1> */}
    </div>
  )
}

export default Logo
