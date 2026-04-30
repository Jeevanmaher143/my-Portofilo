import React, { useState, useEffect } from 'react';
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
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import './Header.css';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills'},
    { label: 'Contact', href: '#contact' },
    {label : 'Experience',href:'#experience'},
  ];

  // Mobile Drawer
  const drawer = (
    <Box 
      className="mobile-drawer"
      sx={{ 
        width: 280,
        height: '100%',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        position: 'relative',
      }}
      role="presentation"
    >
      {/* Simple gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2.5,
        borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
      }}
      className="drawer-header"
      >
        <Typography variant="h6" sx={{ 
          fontWeight: 700,
          color: '#fbbf24',
        }}>
          Menu
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          className="drawer-close-btn"
          sx={{ 
            color: '#fbbf24',
            '&:hover': {
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ p: 2 }}>
        {navItems.map((item, index) => (
          <ListItem 
            key={item.label} 
            disablePadding
            className={`drawer-list-item drawer-item-${index}`}
          >
            <ListItemButton 
              href={item.href}
              onClick={handleDrawerToggle}
              className="drawer-nav-link"
              sx={{
                py: 1.5,
                px: 2,
                mb: 1,
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(30, 41, 59, 0.5)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  borderColor: '#fbbf24',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#f1f5f9',
                }}
              />
              <Box
                sx={{
                  color: '#fbbf24',
                  fontSize: '1.2rem',
                  transition: 'transform 0.3s ease',
                  '.drawer-nav-link:hover &': {
                    transform: 'translateX(4px)',
                  },
                }}
              >
                →
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Drawer Footer */}
      <Box
        className="drawer-footer"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2.5,
          borderTop: '1px solid rgba(251, 191, 36, 0.2)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.85rem',
          }}
        >
          © 2024 Jeevan Maher
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={0}
        className={`header-appbar ${scrolled ? 'scrolled' : ''}`}
        sx={{ 
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: { xs: 1, md: 1.5 } }}>
            {/* Logo/Name */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              gap: { xs: 1, md: 1.5 }
            }}
            className="header-brand-container"
            >
              <Box
                className="header-logo"
                sx={{
                  width: { xs: 38, md: 44 },
                  height: { xs: 38, md: 44 },
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CodeIcon sx={{ color: '#0f172a', fontSize: { xs: '1.3rem', md: '1.5rem' } }} />
              </Box>
              <Typography 
                variant="h6" 
                className="header-brand-text"
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                  color: '#fbbf24',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#f59e0b',
                  },
                }}
              >
                Jeevan Maher
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }} className="header-nav-container">
                {navItems.map((item, index) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    className={`header-nav-btn nav-btn-${index}`}
                    sx={{
                      color: '#f1f5f9',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      px: 2,
                      py: 0.75,
                      borderRadius: '8px',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      border: '1px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(251, 191, 36, 0.1)',
                        borderColor: 'rgba(251, 191, 36, 0.3)',
                        color: '#fbbf24',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%) scaleX(0)',
                        width: '60%',
                        height: '2px',
                        backgroundColor: '#fbbf24',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                className="header-mobile-menu-btn"
                sx={{ 
                  ml: 1,
                  width: { xs: 40, sm: 44 },
                  height: { xs: 40, sm: 44 },
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  color: '#fbbf24',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobile-drawer-container"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(4px)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;