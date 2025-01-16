import React, { useState } from 'react';

export default function CursoForm() {
  const [curso, setCurso] = useState({
    nombre: '',
    instituto: '',
    fecha_inicio: '',
    descripcion: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
    console.log('Estado actualizado del curso:', curso);  // Verificar el estado después de cada cambio
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con los siguientes datos:', curso);  // Depurar el estado que se está enviando

    fetch('http://localhost:5000/cursos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(curso),
    })
      .then((response) => {
        console.log('Respuesta del servidor:', response);
        
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log('Curso agregado exitosamente:', data);
      })
      .catch((error) => {
        console.error('Error al agregar el curso:', error);
      });
  };

  return (
    <div>
      <h1>Formulario de Cursos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Curso:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={curso.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="instituto">Instituto:</label>
          <input
            type="text"
            id="instituto"
            name="instituto"
            value={curso.instituto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fecha_inicio">Fecha de Inicio:</label>
          <input
            type="date"
            id="fecha_inicio"
            name="fecha_inicio"
            value={curso.fecha_inicio}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={curso.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar Curso</button>
      </form>
    </div>
  );
}