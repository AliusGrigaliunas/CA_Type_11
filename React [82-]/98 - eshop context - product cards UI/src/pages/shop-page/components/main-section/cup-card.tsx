import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  styled,
} from '@mui/material';
import { Swiper as SwiperJS, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img from 'components/img';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const Swiper = styled(SwiperJS)({
  height: 250,
});

const CupCard: React.FC<CupCardProps> = ({
  id,
  title,
  description,
  images,
  price,
}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper elevation={3} sx={{ height: 400 }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {images.map((imgSrc) => (
          <SwiperSlide key={imgSrc}>
            <Img src={imgSrc} sx={{ height: '100%', width: '100%' }} />
          </SwiperSlide>
        ))}
      </Swiper>
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
  1. Iškelti Swiper komponentą į globalių komponentų aplanką

  2. Po nuotrauką atvaizduokite Pavadinimą

  3. Išskirkite tekstui (description) ne daugiau nei 4 eilutes. PS. line-clamp

  4. Kaina atvaizduokite po nuotrauke dešinėje pusėje, taip kad netrūkdytų pavadinimui

  5. Sukurkite 2 mygtukus, vienas šalia kito
    * Peržiūrėti - kurį paspaudut atspausdinamas produkto id
    * Dėti į krepšelį - kursį paspaudus atspausdinamas produkto id

  6. pritaikykite koretelės reikiamą aukštį naudojant:
    * https://smartdevpreneur.com/5-mui-sx-breakpoint-examples/
        * skiltis - Create Responsive Layout with MUI SX Breakpoints
*/
