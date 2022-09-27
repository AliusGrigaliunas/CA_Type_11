import React from 'react';
import { useParams } from 'react-router-dom';

const CupPage = () => {
  const params = useParams();

  return (
    <div>{JSON.stringify(params)}</div>
  );
};

export default CupPage;
