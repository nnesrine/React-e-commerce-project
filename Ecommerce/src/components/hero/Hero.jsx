import { Box, Container } from "@mui/material";
import Images from "./Images";
import ImageOne from "./banner-16.jpg";
import ImageTwo from "./banner-17.jpg";
import Slider from "./Slider";
import IconSection from "./IconSection";

export default function Hero() {
  
  return (
    <Container  >
    
   <Box sx={{mt:4,display:"flex",alignItems:"center" ,gap:1}}>
         <Slider></Slider>
       <Box sx={{display:{xs:"none",md:"block"},minWidth: "26.6%"}}>
         <Images img={ImageTwo} typgOne="new arrivals" typgTwo="summer sale 20% off" typgThree="shop now "></Images>
         <Images img={ImageOne} typgOne="gaming 4k" typgTwo="desktop & laptops" typgThree="shop now "></Images>
       </Box>
       
   </Box>
     
        <IconSection></IconSection>
   
    </Container>
  )
}
