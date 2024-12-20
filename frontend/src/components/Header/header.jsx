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

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				padding: '8px 20px',
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
						src={isDarkMode ? logoForDark : logoForBright}
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
					{['IT', 'Business', 'Edu'].map((category, index) => (
						<NavLink
							key={index}
							to={`/${category}`}
							end
							style={({ isActive }) => ({
								textDecoration: "none",
								color: isActive
									? "#aa3030"
									: isDarkMode
									? "#e6e6e6"
									: "#191919",
							})}
						>
							<li style={{ margin: '9px 20px' }}>
								<ThemedButton
									isDarkMode={isDarkMode}
									onClick={() => onClickCategory(category.toLowerCase())}
								>
									{category === 'IT'
										? 'Information Technology'
										: category === 'Edu'
										? 'Education'
										: category}
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
					<Typography variant="h6" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919", fontWeight: 'bold' }}>
						{isLoggedIn ?
							<Button sx={{ fontWeight: "bold", color: "#191919" }} variant="text" onClick={handleLogout}>Logout</Button> : 'Login'}
					</Typography>
				</Box>
			</NavLink>
		</Box>
	);
};

export default Header;
