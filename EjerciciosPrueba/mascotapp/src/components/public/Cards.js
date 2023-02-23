// rafc + tab

import React, { useState , useEffect } from 'react'
import RickAndMortyService from "../../services/RickAndMorty.service";
import Card from './Card'


// const Cards = ({ mascotas }) => { // Lleno las cartas con las mascotas
const Cards = () => {

  const [mascotas, setMascotas] = useState([]); // Creo el Hook de mascotas vacío

  useEffect(() => { // Hook q se encarga de una escucha activa de lo q cambia en mi componente p/ hacer lo q tenga q hacer

    RickAndMortyService.getAllCharacters() // Se comunica con el service y trae todas las mascotas
    
    .then((data) => setMascotas(data.results)) // Capturo y seteo la info del result de la API
    .catch((error) => console.log(error));

  }, []) // Variable a escuchar constantemente para ver si cambia

  // Variable card list genera y devuelve cartas con esos elementos
  const cardList = mascotas.map((m) => <Card mascota={m} key={m.id} />) // Genero todas las cartas y le paso una mascota + el id para diferenciarlas

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

           {cardList} {/*Llamo a todas las cartas creadas */}

        </div>
      </div>
    </div>
  )
}

export default Cards
