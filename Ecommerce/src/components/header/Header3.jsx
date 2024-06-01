import { Container, IconButton, Typography,Drawer, Box,ListItemButton,ListItemText ,useMediaQuery} from "@mui/material";
import * as React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LinksList from "./LinksList";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
export default function Header3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpansion = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
   <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center",mt:5}}>
   <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // eslint-disable-next-line no-undef
        sx={{color:"inherit",width:200,justifyContent:"flex-start","&:hover":{bgcolor:"#64748B"},bgcolor:"#64748B"}}

      >
        <DatasetOutlinedIcon></DatasetOutlinedIcon>
        <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}> Categories</Typography>
         <KeyboardArrowRightOutlinedIcon sx={{marginLeft:"42px"}}></KeyboardArrowRightOutlinedIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root":{width:200,bgcolor:"#64748B"}}}
      >
        
        <MenuItem onClick={handleClose}>
        <PedalBikeIcon></PedalBikeIcon>
          <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}>bikes</Typography>
          </MenuItem>
        
        <MenuItem onClick={handleClose}>
        <LaptopMacIcon></LaptopMacIcon>
        <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}>Electronics</Typography></MenuItem>
        
        <MenuItem onClick={handleClose}>
        <MenuBookIcon></MenuBookIcon>
        <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}>Books</Typography>
          </MenuItem>
        
        <MenuItem onClick={handleClose}>
        <SportsEsportsIcon></SportsEsportsIcon>
          <Typography sx={{padding:0,textTransform:"capitalize",mx:1}}>Games</Typography></MenuItem>

      </Menu>
    </div>
    {useMediaQuery('(min-width:1200px)') && <LinksList></LinksList> }
      

    {useMediaQuery('(max-width:1200px)') && <IconButton onClick={toggleDrawer("top", true)}>
  
     <MenuOutlinedIcon></MenuOutlinedIcon>
  </IconButton>}
  <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            sx={{".MuiDrawer-paper":{height:"100%"}}}
          >
           <Box sx={{width:444,mx:"auto",my:6,position:"relative"}}>
            <IconButton sx={{position:"absolute",left:"100%"}}>
              <Close onClick={toggleDrawer("top", false)} sx={{"&:hover":{color:"red",transform: 'rotate(180deg)',transition: 'transform 0.3s ease-in-out'}
              }}></Close>
            </IconButton>
           </Box>
           <Box sx={{width:497,mx:"auto",my:4}}>
      <Accordion
      elevation={0} 
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
          bgcolor:"inherit"
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Home</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>

<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 3" />
</ListItemButton>

        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0} sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          <Typography>Mega Menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
        </AccordionDetails>
      </Accordion>
      <Accordion  elevation={0}  sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          <Typography>full screen menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
        </AccordionDetails>
      </Accordion>
      <Accordion   elevation={0}  sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          <Typography>pages</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
        </AccordionDetails>
      </Accordion>
      <Accordion  elevation={0}  sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          <Typography>user account</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
        </AccordionDetails>
      </Accordion>
      <Accordion  elevation={0}  sx={{bgcolor:"initial"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          
        >
          <Typography>vendor account</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 1" />
</ListItemButton>
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="link 2" />
</ListItemButton>
        </AccordionDetails>
      </Accordion>
    </Box>
          </Drawer>
   </Container>
  )
}
