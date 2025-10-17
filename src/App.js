import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (filters) => {
    setIsLoading(true);
    setSearchPerformed(true);
    setError(null);
    setJobs([]);

    const params = new URLSearchParams();
    if (filters.cargo) params.append('cargo', filters.cargo);
    if (filters.distrito) params.append('distrito', filters.distrito);
    if (filters.sueldo_min) params.append('sueldo_min', filters.sueldo_min);
    if (filters.sueldo_max) params.append('sueldo_max', filters.sueldo_max);
    if (filters.experiencia) params.append('experiencia', filters.experiencia);
    if (filters.jornada) params.append('jornada', filters.jornada);
    if (filters.fuente) params.append('fuente', filters.fuente);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      // Aquí se construye la URL final usando la variable API_URL
      const response = await fetch(`${API_URL}/api/search?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('No se pudo conectar con el servidor de búsqueda. Asegúrate de que está corriendo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🚀 Job Scraper Pro</h1>
        <p>Encuentra tu próximo trabajo en Computrabajo y Bumeran</p>
      </header>
      <main className="app-main">
        <aside className="search-panel">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </aside>
        <section className="results-panel">
          <JobList 
            jobs={jobs} 
            isLoading={isLoading} 
            error={error} 
            searchPerformed={searchPerformed} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;