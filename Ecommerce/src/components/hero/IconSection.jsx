import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function IconSection() {
    const theme=useTheme();
  return (
    <Container sx={{mt:"50px",bgcolor:theme.palette.mode==="dark" ? "#000" : "#fff",justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px'}} >
        <Stack  divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem  /> : null} direction="row" alignItems="center" sx={{textTransform:"capitalize",color:"inherit",flexWrap:"wrap"}}>
            <Box sx={{display:"flex",alignItems:"center",gap:3,width:270,flexGrow:1,justifyContent:useMediaQuery('(min-width:600px)') ? "center" : "left",py:1.6}}> 
                <ElectricBoltIcon fontSize="large"></ElectricBoltIcon>
               <Box>
                 <Typography variant="h6" fontWeight="bold">fast delivery</Typography>
                 <Typography variant="body2">start from 10$</Typography>
               </Box>
            </Box>

            <Box sx={{display:"flex",alignItems:"center",gap:3,width:270,flexGrow:1,justifyContent:useMediaQuery('(min-width:600px)') ? "center" : "left",py:1.6}}>
                <WorkspacePremiumIcon fontSize="large"></WorkspacePremiumIcon>
                <Box>
                    <Typography variant="h6" fontWeight="bold">money garentee</Typography>
                    <Typography variant="body2">7 days back</Typography>
                </Box>
            </Box>

            <Box sx={{display:"flex",alignItems:"center",gap:3,width:270,flexGrow:1,justifyContent:useMediaQuery('(min-width:600px)') ? "center" : "left",py:1.6}}>
                <AccessAlarmIcon fontSize="large"></AccessAlarmIcon>
               <Box>
                 <Typography variant="h6" fontWeight="bold">365 days</Typography>
                 <Typography variant="body2">for free return</Typography>
               </Box>
            </Box>

            <Box sx={{display:"flex",alignItems:"center",gap:3,width:270,flexGrow:1,justifyContent:useMediaQuery('(min-width:600px)') ? "center" : "left",py:1.6}}>
                <CreditScoreIcon fontSize="large"></CreditScoreIcon>
              <Box>
                  <Typography variant="h6" fontWeight="bold">payement</Typography>
                  <Typography variant="body2">secure system</Typography>
              </Box>
            </Box>
        </Stack>

    </Container>
  )
}
