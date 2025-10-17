import React from 'react';

const JobCard = ({ job }) => {
  const getSourceClassName = (source) => {
    if (source.toLowerCase() === 'computrabajo') return 'source-ct';
    if (source.toLowerCase() === 'bumeran') return 'source-bm';
    return '';
  };

  return (
    <div className="job-card">
      <div className="card-header">
        <h3 className="job-title">{job.Título}</h3>
        <span className={`source-tag ${getSourceClassName(job.Fuente)}`}>{job.Fuente}</span>
      </div>
      <p className="job-company">🏢 {job.Empresa}</p>
      <p className="job-location">📍 {job.Distrito}</p>
      <p className="job-salary">💰 {job.Salario}</p>
      <div className="card-footer">
        <span className="job-date">🗓️ {job['Fecha publicación']}</span>
        <a href={job.Enlace} target="_blank" rel="noopener noreferrer" className="apply-button">
          Ver Oferta
        </a>
      </div>
    </div>
  );
};

export default JobCard;