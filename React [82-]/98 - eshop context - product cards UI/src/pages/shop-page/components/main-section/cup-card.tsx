import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
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
      <Box sx={{ p: 3 }}>
        {id}
        {title}
        {description}
        {price}
      </Box>
    </Paper>
  </Grid>
);

export default CupCard;

/*
  // 1. Iškelti Swiper komponentą į globalių komponentų aplanką.

  * 11:15
  2. Po nuotrauką atvaizduokite Pavadinimą

  * 11:25
  3. Išskirkite tekstui (description) ne daugiau nei 4 eilutes. PS. line-clamp

  * 11:35
  4. Kaina atvaizduokite po nuotrauke dešinėje pusėje, taip kad netrūkdytų pavadinimui

  * 11:45
  5. Sukurkite 2 mygtukus, vienas šalia kito
    * Peržiūrėti - kurį paspaudut atspausdinamas produkto id
    * Dėti į krepšelį - kursį paspaudus atspausdinamas produkto id
    *
  * 11:55
  6. pritaikykite koretelės reikiamą aukštį naudojant:
    * https://smartdevpreneur.com/5-mui-sx-breakpoint-examples/
        * skiltis - Create Responsive Layout with MUI SX Breakpoints
*/
