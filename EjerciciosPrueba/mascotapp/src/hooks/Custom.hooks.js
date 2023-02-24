import { useState } from 'react';

export const useUserForm = (initialState = {}) =>{ // Hook q permite manejar un formulario

  const [form, setForm] = useState(initialState)

  const handleChanges = ({target}) =>{ // Función q escucha cambios en un input y toma el target (Desestructuro el target)

    const {name, value} = target; // Obtengo name y value de target / target hace referencia al input q llama a handleChanges

    setForm( // Voy armando un JSON con los campos q añado en los inputs
      {
        ...form, // Hace q si form tenia valor tmb los incluya y agregue nuevos
        [name]: value, // No soporta elementos duplicados
      }
    )
  }
  return {
    form, setForm, handleChanges,
  }
}