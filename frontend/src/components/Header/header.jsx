import { NavLink } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/LOGO_black.png';

const Header = ({ onClickCategory }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				padding: '8px 20px',
				marginBottom: '35px',
				backgroundColor: '#191919',
				color: '#aa3030',

			}}
		>

			<NavLink to='/'>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 65 }}>
					<img src={logo} alt="Logo" style={{ height: '60px', width: 'auto' }} />
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

					<NavLink
						to="/IT"
						end
						style={({ isActive }) => ({
							textDecoration: 'none',
							color: isActive ? '#aa3030' : '#e6e6e6',
						})}
					>
						<li style={{ margin: '9px 20px' }}>
							<Button
								variant="text"
								onClick={() => onClickCategory('technology')}
								sx={{
									color: 'inherit',
									fontSize: 20,
									fontWeight: 'bold',
									textTransform: 'none',
									'&:hover': {
										color: '#aa3030',
									},
								}}
							>
								Information Technology
							</Button>
						</li>
					</NavLink>


					<NavLink
						to="/Business"
						end
						style={({ isActive }) => ({
							textDecoration: 'none',
							color: isActive ? '#aa3030' : '#e6e6e6',
						})}
					>
						<li style={{ margin: '9px 20px' }}>
							<Button
								variant="text"
								onClick={() => onClickCategory('business')}
								sx={{
									color: 'inherit',
									fontSize: 20,
									fontWeight: 'bold',
									textTransform: 'none',
									'&:hover': {
										color: '#aa3030',
									},
								}}
							>
								Business
							</Button>
						</li>
					</NavLink>

					<NavLink
						to="/Edu"
						end
						style={({ isActive }) => ({
							textDecoration: 'none',
							color: isActive ? '#aa3030' : '#e6e6e6',
						})}
					>
						<li style={{ margin: '9px 20px' }}>
							<Button
								variant="text"
								onClick={() => onClickCategory('education')}
								sx={{
									color: 'inherit',
									fontSize: 20,
									fontWeight: 'bold',
									textTransform: 'none',
									'&:hover': {
										color: '#aa3030',
									},
								}}
							>
								Education
							</Button>
						</li>
					</NavLink>
				</ul>
			</Box>

			<NavLink to='/Login'>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }}>
					<AccountCircle fontSize="large" sx={{ mx: "10px", color: "#aa3030" }} />
					<Typography variant="h6" sx={{ color: '#e6e6e6', fontWeight: 'bold' }}>
						Login
					</Typography>
				</Box>
			</NavLink>
		</Box>
	);
};

export default Header;
