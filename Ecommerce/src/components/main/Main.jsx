import { Box, Container, Stack, Typography,IconButton } from "@mui/material";
import Rating from '@mui/material/Rating';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


import { Close } from "@mui/icons-material";


export default function Main() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
  <Container sx={{mt:"50px",paddingBottom:20}}>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:3}}>
        <Stack>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>All Our Arrivals in a exclusive brand selection </Typography>
        </Stack>
        <ToggleButtonGroup
        color="error"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{".Mui-selected":{
        border:"1px solid  rgba(233,69,96,0.5) !important",
        color:"#e94560",
        backgroundColor:"initial"
      }}}
    >
      <ToggleButton  className="mybotton" value="left" aria-label="left aligned">
        All Products
      </ToggleButton>
      <ToggleButton className="mybotton" value="center" aria-label="centered" sx={{mx:"16px !important"}}>
        Men Category
      </ToggleButton>
      <ToggleButton className="mybotton" value="right" aria-label="right aligned">
       Women Category
      </ToggleButton>
    </ToggleButtonGroup>
        
      </Box>
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
      {["t-shirt","dress","blazer"].map((item)=>{
        return(<Card  key={item} sx={{ maxWidth: 300 ,mt:"40px",":hover .MuiCardMedia-root":{scale:"1.1",transition:"0.37",rotate:"1deg"},cursor:"pointer" }}>
        <CardMedia
          sx={{ height: 277 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
         <Stack direction={"row"} justifyContent="space-between" alignItems="center">
           <Typography gutterBottom variant="h5" component="div">
             T-shirt
           </Typography>
           <Typography gutterBottom variant="h5" component="div">
             50.00$
           </Typography>
         </Stack >
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{textTransform:"capitalize",mr:2}}  size="large" onClick={handleClickOpen}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{".MuiPaper-root":{minWidth:{sx:"100%",md:880}}}}
      >
        <IconButton sx={{position:"absolute",left:"94%"}}>
              <Close onClick={handleClose} sx={{"&:hover":{color:"red",transform: 'rotate(180deg)',transition: 'transform 0.3s ease-in-out'}
              }}></Close>
            </IconButton>
        <Stack sx={{flexDirection:{xs:"column",md:"row"}}} textAlign={"center"} justifyContent={"space-between"} gap={"30px"} >
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}  >
            <img style={{width:360}} src="src\components\main\image\bbb.jpg" ></img>
          </Box >
          <Box display={"flex"} flexDirection={"column"}   gap={"5px"} sx={{py:2,textAlign: { xs: "center", sm: "left" }}}>
          <Typography sx={{fontSize:"26px",textTransform:"uppercase"}}>
          T- shirt for Man
        </Typography>
            <Typography variant="h6" color={"#f84f52"}>12$</Typography>
            <Typography variant="body1">Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            </Typography>
            <Stack direction={"row"} gap={1} my={2}>
              {
                ["src/components/main/image/hhh.jpg","src/components/main/image/final.jpg"].map((item)=>{
                  return (
                    <img style={{borderRadius:3}} width={90} src={item} alt="" key={item}></img>
                  )
                })
              }
            </Stack>
       
          <Button onClick={handleClose} sx={{width:"100px",textTransform:"capitalize",fontWeight:"bold" ,color:"white",bgcolor:"#1172d9"}}>
            <ShoppingCartCheckoutIcon sx={{mr:1}} fontSize="small"></ShoppingCartCheckoutIcon>
            by now</Button>
       

          </Box>
        </Stack>
      </Dialog>
            <ShoppingCartCheckoutIcon  sx={{mr:1}}  fontSize="small"></ShoppingCartCheckoutIcon>
            Add to Cart</Button>
            <Rating name="read-only" value={3.5}  precision={0.5} readOnly />
        </CardActions>
      </Card>)
      })}
      </Stack>
      
  </Container>
  )
}
