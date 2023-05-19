import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Tarea({ id, texto, completado, completarTarea, eliminarTarea }) {
  return ( 
    <div className={ completado ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
      <div 
        className='tarea-texto'
        onClick={ () => completarTarea(id) }>
        {texto}
      </div>
      <div 
        className='tarea-icono'
        onClick={ () => eliminarTarea(id) }>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  );
}

export default Tarea;
