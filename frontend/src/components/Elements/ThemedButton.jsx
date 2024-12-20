import { Button } from '@mui/material';

const ThemedButton = ({ isDarkMode, onClick, children, sx = {} }) => {
  const baseStyles = {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'none',
  };

  const hoverAndActiveStyles = {
    '&:hover, &.Mui-active': {
      color: '#aa3030',
    },
  };

  return (
    <Button
      onClick={onClick}
      sx={{
        color: isDarkMode ? '#e6e6e6' : '#191919',
        ...baseStyles,
        ...hoverAndActiveStyles,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;