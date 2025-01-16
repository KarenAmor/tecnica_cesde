import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CursoList from './components/CursoList';
import DocenteList from './components/DocenteList';
import CursoForm from './components/CursoForm';
import DocenteForm from './components/DocenteForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<CursoList />} />
        <Route path="/cursos/agregar" element={<CursoForm />} />
        <Route path="/docentes" element={<DocenteList />} />
        <Route path="/docentes/agregar" element={<DocenteForm />} />
      </Routes>
    </Router>
  );
}

export default App;
