import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useScrollTrigger, Slide, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';

const Header = ({ onThemeToggle }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger();
  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setMobileOpen(true);
  };

  const handleMenuClose = () => {
    setMobileOpen(false);
  };

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Education', target: 'education' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Certifications', target: 'certifications' },
    { name: 'Achievements', target: 'achievements' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar position="sticky" sx={{ bgcolor: 'background.paper', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, md: 4 } }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>
            Pranav P
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.target}
                  component={Link}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 2,
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                href="/resume.pdf"
                download
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Download Resume
              </Button>
              <IconButton onClick={onThemeToggle} sx={{ color: 'text.secondary' }}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleMenuClose}
                sx={{ '& .MuiDrawer-paper': { bgcolor: 'background.paper', width: 240 } }}
              >
                <Box sx={{ pt: 2 }}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.target} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={item.target}
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={handleMenuClose}
                          sx={{
                            py: 1.5,
                            px: 3,
                            color: 'text.secondary',
                            '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' },
                          }}
                        >
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        href="/resume.pdf"
                        download
                        sx={{
                          py: 1.5,
                          px: 3,
                          color: 'text.secondary',
                          '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' },
                        }}
                      >
                        <ListItemText primary="Download Resume" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={onThemeToggle}
                        sx={{
                          py: 1.5,
                          px: 3,
                          color: 'text.secondary',
                          '&:hover': { bgcolor: 'primary.light', color: 'primary.contrastText' },
                        }}
                      >
                        <ListItemText
                          primary={`Switch to ${theme.palette.mode === 'dark' ? 'Light' : 'Dark'} Mode`}
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;