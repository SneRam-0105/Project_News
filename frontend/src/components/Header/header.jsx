import { NavLink } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logoForDark from '../../assets/LOGO_black.png';
import logoForBright from '../../assets/LOGO.png';
import ToggleDarkMode from '../Elements/DarkModeSwitch.jsx';
import ThemedButton from '../Elements/ThemedButton.jsx';

const Header = ({ onClickCategory, isLoggedIn, logInHandler, isDarkMode, handleThemeChange }) => {

  const handleLogout = (e) => {
    logInHandler(false);
    e.preventDefault();
  };

  const categories = [
    { name: 'IT', label: 'Information Technology' },
    { name: 'Business', label: 'Business' },
    { name: 'Edu', label: 'Education' },
  ];

  const getLogo = () => {
    return isDarkMode ? logoForDark : logoForBright;
  };

  const getTextColor = (isActive) => {
    return isActive ? '#aa3030' : (isDarkMode ? '#e6e6e6' : '#191919');
  };

  const getButtonColor = () => {
    return isDarkMode ? '#e6e6e6' : '#191919';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '8px 30px',
        backgroundColor: isDarkMode ? '#080808' : '#f0f0f0',
      }}
    >

      <NavLink to="/">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 65,
          }}
        >
          <img
            src={getLogo()}
            alt="Logo"
            style={{ height: '60px', width: 'auto' }}
          />
        </Box>
      </NavLink>

      <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={`/${category.name}`}
              end
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: getTextColor(isActive),
              })}
            >
              <li style={{ margin: '9px 20px' }}>
                <ThemedButton
                  isDarkMode={isDarkMode}
                  onClick={() => onClickCategory(category.name)}
                >
                  {category.label}
                </ThemedButton>
              </li>
            </NavLink>
          ))}
        </ul>
      </Box>

      <ToggleDarkMode handleThemeChange={handleThemeChange} />

      <NavLink to="/UserLogin" style={{ textDecoration: "none" }}>
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold',
        }}>
          <AccountCircle fontSize="large" sx={{ mx: '10px', color: '#aa3030' }} />
          <Typography variant="h6" sx={{ color: getButtonColor(), fontWeight: 'bold' }}>
            {isLoggedIn ?
              <Button sx={{ fontWeight: "bold", color: getButtonColor() }} variant="text" onClick={handleLogout}>Logout</Button> : 'Login'}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
};

export default Header;
