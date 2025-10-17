import React, { useState } from 'react';

const SearchForm = ({ onSearch, isLoading }) => {
  const [cargo, setCargo] = useState('');
  const [distrito, setDistrito] = useState('');
  const [sueldo_min, setSueldoMin] = useState('');
  const [sueldo_max, setSueldoMax] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [jornada, setJornada] = useState('');
  const [fuente, setFuente] = useState('todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ cargo, distrito, sueldo_min, sueldo_max, experiencia, jornada, fuente });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <h3>Filtros de Búsqueda</h3>
      
      <div className="form-group">
        <label htmlFor="cargo">Cargo o palabra clave</label>
        <input type="text" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Ej: Desarrollador React"/>
      </div>

      <div className="form-group">
        <label htmlFor="distrito">Distrito (en Lima)</label>
        <input type="text" id="distrito" value={distrito} onChange={(e) => setDistrito(e.target.value)} placeholder="Ej: Miraflores"/>
      </div>

      <div className="form-group form-group-inline">
          <div>
            <label htmlFor="sueldo_min">Sueldo Mín. (S/.)</label>
            <input type="number" id="sueldo_min" value={sueldo_min} onChange={(e) => setSueldoMin(e.target.value)} placeholder="Ej: 2000"/>
          </div>
          <div>
            <label htmlFor="sueldo_max">Sueldo Máx. (S/.)</label>
            <input type="number" id="sueldo_max" value={sueldo_max} onChange={(e) => setSueldoMax(e.target.value)} placeholder="Ej: 5000"/>
          </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="experiencia">Experiencia</label>
        <select id="experiencia" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="0">Sin experiencia</option>
          <option value="1">Mínimo 1 año</option>
          <option value="2">Mínimo 2 años</option>
          <option value="3">Mínimo 3+ años</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="jornada">Jornada</label>
        <select id="jornada" value={jornada} onChange={(e) => setJornada(e.target.value)}>
          <option value="">Cualquiera</option>
          <option value="tiempo-completo">Tiempo completo</option>
          <option value="medio-tiempo">Medio tiempo</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="fuente">Fuente de búsqueda</label>
        <select id="fuente" value={fuente} onChange={(e) => setFuente(e.target.value)}>
          <option value="todos">Ambas Fuentes</option>
          <option value="computrabajo">Solo Computrabajo</option>
          <option value="bumeran">Solo Bumeran</option>
        </select>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Buscando...' : 'Buscar Empleos'}
      </button>
    </form>
  );
};

export default SearchForm;