import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Skeleton,
} from '@mui/material';
import Swiper from 'components/swiper';
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
    <Container sx={{ mt: 2 }}>
      {cup ? (
        <>
          <Swiper images={cup.images} sx={{ height: 300 }} />
          <Typography>{cup.title}</Typography>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" width="100%" height={300} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={20} sx={{ mb: 3 }} />
          <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 3 }} />
        </>
      )}
    </Container>
  );
};

export default CupPage;
