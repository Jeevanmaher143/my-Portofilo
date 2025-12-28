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
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
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
        overflow: 'hidden',
      }}
      role="presentation"
    >
      {/* Drawer Background Effects */}
      <div className="drawer-bg-orb orb-1"></div>
      <div className="drawer-bg-orb orb-2"></div>
      <div className="drawer-grid-pattern"></div>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2.5,
        borderBottom: '2px solid rgba(251, 191, 36, 0.2)',
        position: 'relative',
        zIndex: 1,
      }}
      className="drawer-header"
      >
        <Typography variant="h6" sx={{ 
          fontWeight: 800,
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Menu
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          className="drawer-close-btn"
          sx={{ 
            color: '#fbbf24',
            backgroundColor: 'rgba(251, 191, 36, 0.1)',
            border: '2px solid rgba(251, 191, 36, 0.3)',
            '&:hover': {
              backgroundColor: 'rgba(251, 191, 36, 0.2)',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ p: 2, position: 'relative', zIndex: 1 }}>
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
                py: 2,
                px: 2.5,
                mb: 1,
                borderRadius: '12px',
                border: '2px solid rgba(251, 191, 36, 0.2)',
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  borderColor: '#fbbf24',
                  transform: 'translateX(8px)',
                  boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#f1f5f9',
                }}
              />
              <Box
                className="drawer-link-arrow"
                sx={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(251, 191, 36, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fbbf24',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
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
          borderTop: '2px solid rgba(251, 191, 36, 0.2)',
          textAlign: 'center',
          zIndex: 1,
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
          backdropFilter: 'blur(20px)',
          borderBottom: '2px solid rgba(251, 191, 36, 0.2)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        {/* Animated Background Elements */}
        <div className="header-bg-glow"></div>
        <div className="header-top-line"></div>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Toolbar sx={{ py: 1.5 }}>
            {/* Logo/Name */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1,
              gap: 1.5
            }}
            className="header-brand-container"
            >
              <Box
                className="header-logo"
                sx={{
                  width: { xs: 40, md: 45 },
                  height: { xs: 40, md: 45 },
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(251, 191, 36, 0.4)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)',
                    boxShadow: '0 6px 30px rgba(251, 191, 36, 0.6)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transform: 'translateX(-100%)',
                  },
                }}
              >
                <CodeIcon sx={{ color: '#0f172a', fontSize: '1.5rem' }} />
              </Box>
              <Typography 
                variant="h6" 
                className="header-brand-text"
                sx={{ 
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% auto',
                  cursor: 'pointer',
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
                      fontSize: '1rem',
                      px: 2.5,
                      py: 1,
                      borderRadius: '25px',
                      textTransform: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '2px solid transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(251, 191, 36, 0.1)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(251, 191, 36, 0.5)',
                        color: '#fbbf24',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.2), transparent)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.6s ease',
                      },
                      '&:hover::before': {
                        transform: 'translateX(100%)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 8,
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
                  ml: 2,
                  width: 44,
                  height: 44,
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  color: '#fbbf24',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(251, 191, 36, 0.2)',
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
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