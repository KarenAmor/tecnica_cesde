import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cursos">Lista de Cursos</Link></li>
        <li><Link to="/cursos/agregar">Agregar Curso</Link></li>
        <li><Link to="/docentes">Lista de Docentes</Link></li>
        <li><Link to="/docentes/agregar">Agregar Docente</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;