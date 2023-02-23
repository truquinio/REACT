// rafc + tab

import React from 'react'

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <span
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img className='App-logo' height="52" src="rick.png" alt="spin-puppy" />
          </span>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            
            <li><a href="/" className="nav-link px-2 text-secondary"><b>HOME</b></a></li>
            
            {/* <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
          <a href="user-form"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
          <a href="user-form"><button type="button" className="btn btn-warning">Sign-up</button></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
