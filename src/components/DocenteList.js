import React, { useState, useEffect } from 'react';

export default function DocenteList() {
  const [docentes, setDocentes] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('http://localhost:5000/docentes')
      .then(response => response.json()) 
      .then(data => {
        setDocentes(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error al obtener los docentes:', error);
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <div>Cargando...</div>; 
  }

  return (
    <div>
      <h1>Lista de Docentes</h1>
      <ul>
        {docentes.map(docente => (
          <li key={docente.id}>{docente.nombre}</li> 
        ))}
      </ul>
    </div>
  );
}