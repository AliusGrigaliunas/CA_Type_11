import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Skeleton,
  Button,
  InputBase,
  Paper,
  IconButton,
} from '@mui/material';
import Swiper from 'components/swiper';
import CupService from 'services/cup-service';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            my: 2,
          }}
          >
            <Typography component="h1" variant="h4">{cup.title}</Typography>
            <Typography
              component="div"
              variant="h5"
              color="success.main"
              sx={{
                fontWeight: 'medium',
                whiteSpace: 'nowrap',
                pt: 0.5,
              }}
            >
              {`${cup.price} $`}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'medium', my: 2 }}
          >
            {cup.description}
          </Typography>

          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 0.5,
              px: 2,
              mb: 2,
            }}
          >
            <Typography>Kiekis</Typography>
            <Box>
              <IconButton><AddIcon /></IconButton>
              <InputBase value={2} sx={{ width: 40 }} inputProps={{ sx: { textAlign: 'center' } }} />
              <IconButton><RemoveIcon /></IconButton>
            </Box>
          </Paper>

          <Button variant="contained" fullWidth size="large">Pridėti į krepšelį</Button>
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
