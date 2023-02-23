// rafc + tab

import React, { useState, useEffect } from 'react'
import { useUserForm } from './../../hooks/Custom.hooks';

export const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm(); // Llamo y desestructuro el setForm

  const [areEquals, setAreEquals] = useState(true); // Hook p/ ver si passwords son ==

  const [passwordConfirmation, setPasswordConfirmation] = useState(); // Hook q atrapa password de confirmación

  const [password, setPassword] = useState(true)

  
  const validPass = () => { // Comprueba q password no este indefinida

    const { password } = form;

    if (password !== undefined) {
      setPasswordConfirmation(false)
    }
    return password
  }


  const handlePasswordConfirmation = (e) => { // "e" hace refencia al input de donde se ejecuta la función
    setPasswordConfirmation(e.target.value); // Atrapo el valor del imput entero
  }

  useEffect(() => { // Analiza cambios en la App

    const { password } = form; // Destructura form, saca lo q me sirve de form (password) q es name del input contraseña

    setAreEquals(password === passwordConfirmation) // Saca del form si password es idéntica a passwordConfirmation

  }, [passwordConfirmation, password, form]);


  const handleSubmit = (e) => { // Atrapa el envío del formulario
    e.preventDefault() // Evento q evita que se recargue página de formulario al llenarlo
    console.log(form);
  }

  // const [state, setstate] = useState(initialState)

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation " noValidate>
        <div className="row g-3">

          <div className=" col -12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="you@example.com" name="email" onChange={handleChanges} />
          </div>

          <div className="col-12">
            <label html For="address" className="form-label ">Clave</label>
            <input type="text" className="form-control" placeholder="Clave" name="password" onChange={handleChanges} />
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">Repetir clave</label>
            <input type="text" className="form-control" placeholder="Repetir clave" onChange={handlePasswordConfirmation} />

            {!areEquals && (  // Oculto el msj si passwords son o no ==
              <div
                className="form-text list-group-item-danger">Las Claves no son iguales
              </div>
            )}

          </div>

          <hr className="my-4" />
          <button disabled={!areEquals}
            className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Registrarme</button>

        </div>
      </form>
    </div>
  )
}