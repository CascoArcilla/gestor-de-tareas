import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    if (input != '') {
      const tareaNueva = {
        id: uuidv4(),
        texto: input
      }
      
      props.onSubmit(tareaNueva);
    }
  };

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='tex'
        placeholder='Ingrese su tarea'
        name='tarea'
        onChange={manejarCambio}
      />
      <button
        className='tarea-boton'>
        Agregar tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
