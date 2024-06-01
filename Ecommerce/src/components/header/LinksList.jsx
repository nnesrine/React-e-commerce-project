import ArrowDropDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Link, Typography,ListItemText, Paper, ListItemButton } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function LinksList() {


  return (
    <div >

      <Box sx={{alignItems:"center",display:"flex",justifyContent:"space-between",width:800,ml:-80}}>
        <Link href="#" underline="none"  sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list":{display:"block"}}}><Typography variant='body1' sx={{textTransform:"capitalize"}}>Home</Typography> <ArrowDropDownIcon></ArrowDropDownIcon>
      <Box  className="show-list" sx={{width:"160px",position:"absolute",zIndex:2,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="dashboard" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton sx={{":hover .nested-list":{display:"block"}}} >
            <ListItemText primary="products" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
           <Paper  className="nested-list" sx={{width:"160px",position:"absolute",top:"0%",left:"100%",display:"none",color:"inherit"}}>
             <ListItemButton >
             <ListItemText primary="games" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
             </ListItemButton>
             <ListItemButton >
             <ListItemText primary="technologies" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
             </ListItemButton>
             <ListItemButton >
             <ListItemText primary="bikes" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
             </ListItemButton>
           </Paper>
            </ListItemButton>
            <ListItemButton >
            <ListItemText primary="order" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton >
            <ListItemText primary="profile" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box>
  
        </Link>
        <Link href="#" underline="none" sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list2":{display:"block"}}}><Typography variant='body1' sx={{textTransform:"capitalize"}}>Mega Menu</Typography>  <ArrowDropDownIcon></ArrowDropDownIcon>
        <Box  className="show-list2" sx={{width:"160px",position:"absolute",zIndex:2,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="link1" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary="link2" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box>
        </Link>
        <Link href="#" underline="none" sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list3":{display:"block"}}}><Typography variant='body1' sx={{textTransform:"capitalize"}}>Full screen menu</Typography>  <ArrowDropDownIcon></ArrowDropDownIcon>
        <Box  className="show-list3" sx={{width:"160px",position:"absolute",zIndex:2,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="link1" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary="link2" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box></Link>
        <Link href="#" underline="none" sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list4":{display:"block"}}}><Typography variant='body1'sx={{textTransform:"capitalize"}}>pages</Typography>  <ArrowDropDownIcon></ArrowDropDownIcon>
        <Box  className="show-list4" sx={{width:"160px",position:"absolute",zIndex:2,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="link1" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary="link2" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box>
        </Link>
        <Link href="#" underline="none" sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list5":{display:"block"}}}><Typography variant='body1' sx={{textTransform:"capitalize"}}>user account</Typography>  <ArrowDropDownIcon></ArrowDropDownIcon>
        <Box  className="show-list5" sx={{width:"160px",position:"absolute",zIndex:2,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="link1" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary="link2" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box>
        </Link>
        <Link href="#" underline="none" sx={{justifyContent:"center",display:"flex",color:"inherit",position:"relative",":hover .show-list6":{display:"block"}}}><Typography variant='body1' sx={{textTransform:"capitalize"}}>vendor account</Typography>  <ArrowDropDownIcon></ArrowDropDownIcon>
        <Box  className="show-list6" sx={{width:"160px",position:"absolute",zIndex:1,top:"100%",display:"none",color:"inherit"}}>
          <Paper sx={{mt:"10px"}}  >
            <ListItemButton >
            <ListItemText primary="link1" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
            <ListItemButton>
            <ListItemText primary="link2" sx={{".MuiTypography-root":{fontSize:"14px",textTransform:"capitalize"}}}/>
            </ListItemButton>
          </Paper>
      </Box>
        </Link>
      </Box>
     
    </div>
  )
}
