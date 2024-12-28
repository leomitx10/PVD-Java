import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Cadastrar', icon: <AddIcon />, path: '/cadastros' },
    { text: 'Consultar', icon: <SearchIcon />, path: '/' },
    { text: 'Configurações', icon: <SettingsIcon />, path: '/configuracoes' },
    { text: 'Relatórios', icon: <AssessmentIcon />, path: '/relatorios' },
  ].sort((a, b) => {
    const order = {
      'Cadastrar': 1,
      'Consultar': 2,
      'Configurações': 3,
      'Relatórios': 4
    };
    return order[a.text] - order[b.text];
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text}
            onClick={() => handleMenuClick(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              },
              cursor: 'pointer'
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <StoreIcon 
          sx={{ 
            mr: 2, 
            cursor: 'pointer',
            display: { xs: 'none', sm: 'block' }
          }} 
          onClick={() => handleMenuClick('/')} 
        />
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: { xs: 1, md: 0 },
            cursor: 'pointer',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
          onClick={() => handleMenuClick('/')}
        >
          Minha Loja
        </Typography>

        {/* Menu para desktop */}
        <Box 
          sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            gap: { sm: 1, md: 2 }
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              startIcon={item.icon}
              onClick={() => handleMenuClick(item.path)}
              sx={{
                fontSize: { sm: '0.875rem', md: '1rem' },
                px: { sm: 1, md: 2 }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Drawer para mobile */}
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Melhor desempenho em mobile
          }}
          sx={{
            display: { sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
