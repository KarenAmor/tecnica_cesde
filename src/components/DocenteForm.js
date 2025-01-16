import React, { useState } from 'react';

export default function DocenteForm() {
  const [docente, setDocente] = useState({
    nombre: '',
    especialidad: '',
    instituto: '',
    experiencia: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocente({ ...docente, [name]: value });
    console.log('Estado actualizado del docente:', docente); 
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado con los siguientes datos:', docente); 

    fetch('http://localhost:5000/docentes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(docente),
    })
      .then((response) => {
        console.log('Respuesta del servidor:', response);
        
        if (!response.ok) {
          throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log('Docente agregado exitosamente:', data);
      })
      .catch((error) => {
        console.error('Error al agregar el docente:', error);
      });
  };

  return (
    <div>
      <h1>Formulario de Docentes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre del Docente:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={docente.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="especialidad">Especialidad:</label>
          <input
            type="text"
            id="especialidad"
            name="especialidad"
            value={docente.especialidad}
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
            value={docente.instituto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="experiencia">Experiencia:</label>
          <textarea
            id="experiencia"
            name="experiencia"
            value={docente.experiencia}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar Docente</button>
      </form>
    </div>
  );
}