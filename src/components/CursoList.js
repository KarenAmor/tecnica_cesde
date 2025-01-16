import React, { useState, useEffect } from 'react';

export default function CursoList() {
  const [cursos, setCursos] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:5000/cursos')
      .then(response => response.json()) 
      .then(data => {
        setCursos(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error al obtener los cursos:', error);
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Cargando...</div>; 
  }

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>{curso.nombre}</li> 
        ))}
      </ul>
    </div>
  );
}