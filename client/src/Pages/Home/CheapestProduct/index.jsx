import { Box, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

import { Autoplay, Pagination } from 'swiper/modules';
import SliderCard from './SliderCard';
import fetchData from '../../../Utils/fetchData';

export default function CheapestProduct() {
    const theme=useTheme()
    const [product,setProduct]=useState()
    useEffect(() => {
        (async () => {
          const response = await fetchData("product?sort=price&limit=6");
          setProduct(response.data);
        })();
      }, []);
      const items=product?.map((e,index)=><SwiperSlide key={index}><SliderCard desc={e.description} id={e._id} name={e.name} img={e.images[0]} price={e.price} /></SwiperSlide>)
  return (
    <Box height={'550px'} sx={{
        width:{xs:'98%',md:'80%'},
        margin:'50px auto',
        backgroundColor:theme.palette.primary.light,
        padding:'25px 5%',
        borderRadius:'25px'
    }}>
        <Typography sx={{color:'white'}} textAlign={'center'} mb={'20px'} variant='h3' fontSize={'32px'} >Chepest Products</Typography>
    <Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay:4000,
            disableOnInteraction:false,
          }}
        modules={[Pagination,Autoplay]}
        className="cheapest-slider"
      >
        {items}
      </Swiper>
    </Box>
    </Box>
  )
}

