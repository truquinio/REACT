// rafc + tab

import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ mascota }) => {
  
  return (
    <div className="col">
      <div className="card shadow-sm">

        <img width="100%" src={mascota.image} alt="img-RM" /> {/* Relleno cartas con imágenes */}

        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />

        {/* <h3 className="mb-0 text-dark">{mascota.name}</h3> Relleno cartas con nombre de mascota */}

        <div className="card-body">
          <strong className="d-inline- block mb-2 text-success">
            {mascota.species}
          </strong>

          <h3 className="mb-0 text-dark"> {mascota.name}</h3> {/* Relleno cartas con nombre de mascota */}

          <p className="card-text">
            This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a
            little bit longer.
          </p>

          <div className="d-flex justify-content-between align-items-center">
            
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={`/details/${mascota.id}`} className="nav-link">Detalle</Link>
            </button>


            <div className="btn-group">
              {/* <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>*/}
            </div> 
            <small className="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Card
