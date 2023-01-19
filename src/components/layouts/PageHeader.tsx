import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ffffff',
      contrastText: '#1976d2',
    },
  },
});

const pages = [
  { name: 'Главная', address: '.' },
  { name: 'Что это?', address: 'about' },
  { name: 'Контакты', address: 'contacts' },
  { name: 'Инструкции', address: 'instructions' },
];

const enterForm = { name: 'enter', address: 'enter' };
const registerForm = { name: 'register', address: 'register' };

export const PageHeader = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Агрегатор абитуриентов
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={false}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <Link
                    component={RouterLink}
                    to={page.address}
                    className={'appBarLink'}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Агрегатор абитуриентов
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                component={RouterLink}
                key={page.name}
                to={page.address}
                sx={{ textDecoration: 'none' }}
                underline="none"
              >
                <Button
                  key={page.name}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Stack spacing={6} direction="row">
            <Box sx={{ flexGrow: 0 }}>
              <Link
                component={RouterLink}
                to={registerForm.address}
                underline="none"
              >
                <ThemeProvider theme={theme}>
                  <Button
                    key={registerForm.name}
                    sx={{ my: 2, display: 'block' }}
                    color="secondary"
                    variant="contained"
                  >
                    Регистрация
                  </Button>{' '}
                </ThemeProvider>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link
                component={RouterLink}
                to={enterForm.address}
                underline="none"
              >
                <ThemeProvider theme={theme}>
                  <Button
                    key={enterForm.name}
                    sx={{ my: 2, display: 'block' }}
                    color="secondary"
                    variant="contained"
                  >
                    Вход
                  </Button>{' '}
                </ThemeProvider>
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
