import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CupService from 'services/cup-service';

const CupPage: React.FC = () => {
  const { id } = useParams();
  const [cup, setCup] = React.useState<Cup | null>(null);

  if (id === undefined) return <Navigate to="/page-not-found" />;

  React.useEffect(() => {
    (async () => {
      const fetchedCup = await CupService.fetchOne(id);

      setCup(fetchedCup);
    })();
  }, []);

  return (
    <div>{JSON.stringify(cup)}</div>
  );
};

export default CupPage;
