import { Box, Typography, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
export default function Footer() {
  return (
    <Box className="footer" sx={{bgcolor:"#2a3446",color:"#fff",py:2,borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}>
      <Typography textTransform="capitalize"
      sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        developed by 
        <a style={{color:"#f84f52",fontWeight:"bold",marginLeft:"4px",marginRight:"4px",cursor:"pointer"}}>Nesrine Nasri</a>
        &#169;  2024
      </Typography>
     <Zoom in={useScrollTrigger()}>
         <div className="scroll-container">
           <a href="#top" className="Top">
               <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
           </a>
         </div>
     </Zoom>
    </Box>
  )
}
