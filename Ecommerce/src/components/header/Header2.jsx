
import {  Container, Stack, Typography,IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function Header2() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border:"2px solid #7777",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <div>
      <Container sx={{my:3,display:"flex",justifyContent:"space-between"}}>
        <Stack  sx={{alignItems:"center"}} >
          <ShoppingCartOutlinedIcon sx={{display:{xs:"none",md:"block"}}} ></ShoppingCartOutlinedIcon>
          <Typography variant="body2" sx={{display:{xs:"none",md:"block"}}} >E-commerce</Typography>
        </Stack>
      
        <Search sx={{borderRadius:"22px",".MuiInputBase-root":{minWidth:{xs:"90px",md:"500px"}}}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
     
          </Search>
         
    <Stack direction="row" alignItems={"center"}>
        <IconButton>
        <StyledBadge badgeContent={4} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
        </IconButton>
    </Stack >

      </Container>
      
    </div>
  )
}

// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// const options = [
//   'All Categories',
//   'CAR',
//   'Clothes',
//   'Electronics',
// ];



// <
//       div
//      >
//              <List
//          component="nav"
//          aria-label="Device settings"
//          sx={{ bgcolor: 'transparent'}}
//        >
//          <ListItemButton
//            id="lock-button"
//            aria-haspopup="listbox"
//            aria-controls="lock-menu"
//            aria-label="when device is locked"
//            aria-expanded={open ? 'true' : undefined}
//            onClick={handleClickListItem}
//          >
//            <ListItemText
//              className="border"
//              secondary={options[selectedIndex]}
//              sx={{'MuiListItemText':{fontSize:"10px"}}}          />
//          </ListItemButton>
//        </List>
//        <Menu
//          id="lock-menu"
//          anchorEl={anchorEl}
//          open={open}
//          onClose={handleClose}
//          MenuListProps={{
//            'aria-labelledby': 'lock-button',
//            role: 'listbox',
//          }}
       
      
//        >
//          {options.map((option, index) => (
//            <MenuItem
//              key={option}
//              disabled={index === 20}
//              selected={index === selectedIndex}
//              onClick={(event) => handleMenuItemClick(event, index)}
//              sx={{fontSize:"11px"}}
//            >
//              {option}
//            </MenuItem>
//          ))}
//        </Menu>
//      </div>

// const [anchorEl, setAnchorEl] = React.useState(null);
// const [selectedIndex, setSelectedIndex] = React.useState(1);
// const open = Boolean(anchorEl);
// const handleClickListItem = (event) => {
//   setAnchorEl(event.currentTarget);}
//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };