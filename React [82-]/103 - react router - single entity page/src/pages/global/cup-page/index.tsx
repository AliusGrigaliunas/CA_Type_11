import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

/*
  Panaudokite kursuose įgytas žinias, kad atsiųsti duomenis ir atvaizduoti juos naudojant
  JSON.stringify:
    1. Aprašyti metodą parsiuntimui CupService'e, pagal gautą "id"
    2. Naudoti useState saugoti parsiunčiamiems duomenims
    3. Naudoti useEffect komponento sukūrimo metu, tam kad parsiųsti ir įrašyti duomenis į state.

  Atlikę užduotį, pažymėkite 👍
*/

const CupPage: React.FC = () => {
  const { id } = useParams();
  // 2. Naudoti useState saugoti parsiunčiamiems duomenims
  const [cup, setCup] = ...

  if (id === undefined) return <Navigate to="/page-not-found" />;


  // 3. Naudoti useEffect komponento sukūrimo metu, tam kad parsiųsti ir įrašyti duomenis į state.
  React.useEffect(funkcijaKuriąReikVykdyti, masyvasSuDuomenimis)
  return (
    <div>{JSON.stringify(id)}</div>
  );
};

export default CupPage;
