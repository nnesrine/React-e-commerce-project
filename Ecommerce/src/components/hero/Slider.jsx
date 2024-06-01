// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slideOne from "./banner-15.jpg";
import slideTwo from "./banner-25.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Link, Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true}>
        <SwiperSlide >
           <Box sx={{position:"relative"}} >
           {useMediaQuery('(min-width:600px)')&& <img src={slideOne} alt="" className='imag'/>}
               <Stack   className='content' sx={{position:"absolute",top:"40%",left:"5%",transform:"translateY(-50%)",color:"black",textTransform:"uppercase",textAlign:"left"}}>
               <Typography variant="h5"  sx={{my:1}} fontWeight={"500"} >lifestyle collection</Typography>
               <Typography variant='h3'  component="h4" fontWeight="600" sx={{my:0.7}}>men</Typography>
               <Typography variant='h4' sx={{my:0.7}}>sale up to <span style={{color:"red",fontWeight:"bold"}}>30% OFF</span></Typography>
               <Typography variant='body2'sx={{textTransform:"capitalize",my:0.7,color:'#3a4144'}}>get free shopping on orders over $99.00</Typography>
               <Link underline='none' sx={{my:1,width:"150px",height:"50px",backgroundColor:"black",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>shop now</Link>
             </Stack>
           </Box >
        </SwiperSlide>
        <SwiperSlide>
        <Box sx={{position:"relative"}}>
        {useMediaQuery('(min-width:600px)')&& <img src={slideTwo} alt="" className='imag'/>}
             <Stack className='content' sx={{position:"absolute",top:"40%",left:"5%",transform:"translateY(-50%)",color:"black",textTransform:"uppercase",textAlign:"left"}}>
               <Typography variant="h5"  sx={{my:1}} fontWeight={"500"} >lifestyle collection</Typography>
               <Typography variant='h3'  component="h4" fontWeight="600" sx={{my:0.7}}>women</Typography>
               <Typography variant='h4' sx={{my:0.7}}>sale up to <span style={{color:"red",fontWeight:"bold"}}>30% OFF</span></Typography>
               <Typography variant='body2'sx={{textTransform:"capitalize",my:0.7,color:'#3a4144'}}>get free shopping on orders over $99.00</Typography>
               <Link underline='none' sx={{my:1,width:"150px",height:"50px",backgroundColor:"black",color:"white",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>shop now</Link>
             </Stack>
           </Box >
        </SwiperSlide>
      </Swiper>
    </>
  );
}
