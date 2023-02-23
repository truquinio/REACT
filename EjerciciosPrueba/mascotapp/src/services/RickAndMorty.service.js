// Servicio: Capa especializada en comunicarse con apis

import { API_RM } from './../constants/Api.constants';

class RickAndMortyService {

    /* TRAE TODAS LAS MASCOTAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
  async getAllCharacters() {

    const response = await fetch(API_RM.CHARACTERS()); // API_RM.CHARACTERS() es una función, va con ()
    // Si no le paso verbo por default es GET

    // Interceptor
    return response.json(); // Convierto el response a JSON
  }

  /* TRAE MASCOTAS x ID >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
  async getCharacterById(id){

    const response = await fetch(API_RM.CHARACTER_BY_ID(id)); // Si no le paso verbo por default es GET

    // Interceptor
    return response.json();  // Convierto el response a JSON
  }
}

export default new RickAndMortyService(); // Permite usarla desde donde necesitemos