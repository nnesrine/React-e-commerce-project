import { Box,Stack,Typography,Link } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// eslint-disable-next-line react/prop-types
export default function Images({img,typgOne,typgTwo,typgThree}) {
  return (
    <div>
      <Box sx={{position:"relative"}}>
        <img src={img} width={"100%"}></img>
       <Stack sx={{position:"absolute",ml:2,top:"40%",transform:"translateY(-50%)",color:"#3a4144",textTransform:"capitalize"}}>
         <Typography variant="h5" sx={{textTransform:"uppercase"}}>{typgOne}</Typography>
         <Typography variant="h6">{typgTwo}</Typography>
        <Link underline="hover" sx={{cursor:"pointer",color:"#2e3335"}}>
             
             <Typography variant="body1" sx={{display:"flex",alignItems:"center",gap:0.5,":hover":{color:"#bca480"}}}>{typgThree}
             <ArrowForwardIcon fontSize="small" ></ArrowForwardIcon></Typography>
        </Link>
       </Stack>
      </Box>
    </div>
  )
}
