import React, { useState } from "react";
import TareaFormulario from '../componentes/TareaFormulario.js';
import Tarea from '../componentes/Tarea.js';
import '../hojas-de-estilo/ListaTareas.css';

function ListaTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();//quitrar espacios innecesarios

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const elimiarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completado = !tarea.completado;
        return tarea;
      }
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='lista-tareas'>
        {
          tareas.map((tarea) => // map es un metodo que itera por cada item dentro de un arreglo u objeto
            <Tarea
              key={tarea.id} // key forma de identificar un elemento en la lista
              id={tarea.id}
              texto={tarea.texto}
              completado={tarea.completado}
              eliminarTarea={elimiarTarea}
              completarTarea={completarTarea}
            />
          ) 
        }
      </div>
    </>
  );
}

export default ListaTareas;
