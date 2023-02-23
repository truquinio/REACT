// rce + tab

import React, { Component } from "react";
// import RickAndMortyService from "../../services/RickAndMorty.service";
import Cards from './Cards';

export default class Main extends Component {
  constructor(props) { // Cada vez que uso constructores, debo usar props y super x herencia

    super(props); //super es el llamado a Component

    // console.log("Hola desde constructor");

    this.state = { mascotas: [] }; // creo por 1ra vez el componente
  }

  componentDidMount() { // Comunicación con el Servicio
    // console.log("Hola desde componentDidMount");

    /*
    RickAndMortyService.getAllCharacters()
    
    .then((data) => this.setState({mascotas : data.results})) // Capturo y seteo la info del result de la API
    .catch((error) => console.log(error));
    */
  }

  render() {
    // console.log("Hola desde render");

    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">RICK & MORTY API</h1>
              <p className="lead text-muted">
                La API Rick and Morty es una API REST ( ish ) y GraphQL basada en el programa de televisión Rick y Morty.
                Tendrá acceso a unos cientos de personajes, imágenes, ubicaciones y episodios. La API de Rick y Morty está llena de información canónica como se ve en el programa de televisión.
              </p>
              <p>
                <a href="https://rickandmortyapi.com/" className="btn btn-primary my-2">Rick and Morty Api</a>
                {/* <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
              </p>
            </div>
          </div>
        </section>

        {/* CARDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        {/* <Cards mascotas = {this.state.mascotas} /> {/* Le paso el state de mascotas desde componentDidMount */}

        <Cards />

      </main>
    );
  }
}

// export default Main
