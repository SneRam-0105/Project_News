import { Button } from '@mui/material';

const ThemedButton = ({ isDarkMode, onClick, children, sx = {} }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: isDarkMode ? '#e6e6e6' : '#191919',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          color: '#aa3030',
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;
