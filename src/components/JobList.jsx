import React from 'react';
import JobCard from './JobCard';
import LoadingSpinner from './LoadingSpinner';

const JobList = ({ jobs, isLoading, error, searchPerformed }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="message-container error-message">{error}</div>;
  }
  
  if (!searchPerformed) {
      return <div className="message-container">✨ Completa los filtros y encuentra el trabajo de tus sueños.</div>
  }

  if (jobs.length === 0) {
    return <div className="message-container">😕 No se encontraron ofertas con esos criterios. Prueba con otros filtros.</div>;
  }

  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={`${job.Enlace}-${index}`} job={job} />
      ))}
    </div>
  );
};

export default JobList;