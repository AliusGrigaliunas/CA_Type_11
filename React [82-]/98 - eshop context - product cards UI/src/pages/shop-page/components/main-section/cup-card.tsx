import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import Swiper from 'components/swiper';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const CupCard: React.FC<CupCardProps> = ({
  id,
  title,
  description,
  images,
  price,
}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper elevation={3} sx={{ height: 400 }}>
      <Swiper images={images} />
      <Box sx={{ p: 2, pt: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              float: 'right',
              ml: 1,
              mb: 1,
              color: 'success.main',
              fontWeight: 'fontWeightMedium',
            }}
          >
            {`${price}$`}
          </Typography>
          <Typography component="h2" variant="h5">{title}</Typography>
        </Box>
        <Box sx={{ height: 80 }}>
          <Typography
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'elipsis',
            }}
          >
            {description}
          </Typography>
        </Box>

        {id}
        {price}
      </Box>
    </Paper>
  </Grid>
);

export default CupCard;

/*
  // 1. Iškelti Swiper komponentą į globalių komponentų aplanką.

  // * 11:15
  // 2. Po nuotrauką atvaizduokite Pavadinimą

  // * 11:25
  // 3. Išskirkite tekstui (description) ne daugiau nei 4 eilutes. PS. line-clamp

  // * 11:35
  // 4. Kaina atvaizduokite po nuotrauka dešinėje pusėje, taip kad netrūkdytų pavadinimui

  * 11:50
  5. Sukurkite 2 mygtukus, vienas šalia kito
    * Peržiūrėti - kurį paspaudut atspausdinamas produkto id
    * Dėti į krepšelį - kursį paspaudus atspausdinamas produkto id

  6. pritaikykite koretelės reikiamą aukštį naudojant:
    * https://smartdevpreneur.com/5-mui-sx-breakpoint-examples/
        * skiltis - Create Responsive Layout with MUI SX Breakpoints
*/
