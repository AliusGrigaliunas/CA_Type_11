import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const CupPage = () => {
  const { id } = useParams();

  if (id === undefined) return <Navigate to="/page-not-found" />;

  return (
    <div>{JSON.stringify(id)}</div>
  );
};

export default CupPage;
