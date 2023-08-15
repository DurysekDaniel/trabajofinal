import React from 'react'
import {useForm } from 'react-hook-form';
import './Contacto.css';
const Contacto = () => {

  const {register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
  }

  return (<div className='contenedorFormulario'>
    <h2>Formulario</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='formularioCasillas'>
        <label>Nombre y Apellido</label><br/>
        <input type="text" {...register('nombre')} />
      </div>

      <div className='formularioCasillas'>
        <label>Email</label><br/>
        <input type="text" {...register('email')}/>
      </div>

      <div className='formularioCasillas'>
        <label>Mensaje</label><br/>
        <input type="text" {...register('mensaje')} />
      </div>

      <input className='botonEnviar' type="submit" value="Enviar"/>

    </form>
  </div>
    
  )
}

export default Contacto