// rafc + tab

import React, { useState } from 'react'

const Footer = () => { // Renderiza en formato JSX

  // Functional component / cuenta los clicks
  const [clicks, setClicks] = useState(0); // useState(0) = Hook con el initial value

  const year = new Date().getFullYear();
  const companyName = "truquinio";

  const handleClick = () => {
    // console.log("Hola desde handleClick");
    
    setClicks(clicks + 1) // Por c/ click tomo el valor anterior y le sumo 1
  }


  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} | clicks: {clicks}</p>

        <span
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          onClick = {handleClick}
          >
          
          <img className='App-logo' height="52" src="rick.png" alt="spin-puppy" />
        </span>

        {/* <span
          to={"/"}
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img className='App-logo' height="52" src="dog.png" alt="spin-puppy" />
        </span> */}

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">⬆️ Ir al cielo</a></li>
          {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li> */}
        </ul>
      </footer>
    </div>
  )
}

export default Footer
