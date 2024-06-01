import   { useContext,useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'AR',
  'EN',
];

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
    <Box sx={{
        bgcolor:"#2a3446",py:"4px",borderBottomRightRadius:4,borderBottomLeftRadius:4
    }}>
      <Container>
  <Stack direction="row" spacing={1} alignItems={"center"}>
  <Typography sx={{
        mr:2,
        p:"3px 10px",
        bgcolor:"#f84f52",
        borderRadius:"12px",
        fontSize:"10px",
        fontWeight:" bold", 
        color:"#ffff"    }} variant="body2">
          HOT

      </Typography>
      <Typography sx={{
        fontSize:"12px",
        fontWeight:300,
        color:"#ffff"
      }} variant="body2">
        Free Express Shopping
      </Typography>
      <Box flexGrow={1}></Box>
      <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="black"
        >
          <LightModeOutlined sx={{fontSize:"16px", color:"white"}} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined  sx={{fontSize:"16px"}}/>
        </IconButton>
      )}
    </div>
    <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: '#2a3446',p:0,m:0}}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{px:1}}
          
        >
          <ListItemText
       
            secondary={options[selectedIndex]}
          />
        </ListItemButton >
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
           
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{fontSize:"11px"}}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    <TwitterIcon sx={{ fontSize:"16px", color:"#FFFF"}}></TwitterIcon>
    <FacebookIcon sx={{ fontSize:"16px", color:"#FFFF"}}></FacebookIcon>
    <InstagramIcon sx={{ fontSize:"16px", color:"#FFFF"}}></InstagramIcon>
  </Stack>
  </Container>
    </Box>
  )
}
