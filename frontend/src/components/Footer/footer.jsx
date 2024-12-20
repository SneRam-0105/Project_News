import { Box, Typography, Link, Grid, Divider } from "@mui/material";
import { NavLink } from 'react-router-dom';



export default function Footer({ isDarkMode }) {
	return (
		<div
			style={{
				display: "block",
				justifyContent: "center",
				backgroundColor: isDarkMode ? "#080808" : "#f0f0f0",
				color: isDarkMode ? "#e6e6e6" : "#191919",
				padding: "35px 0",
				fontFamily: "Rosario, sans-serif",
			}}
		>
			<Grid container spacing={4} justifyContent="center" sx={{ px: 2 }}>
				<div style={{ display: "flex", justifyContent: "center", gap: "50vh", paddingTop: "30px" }}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" sx={{ color: "#aa3030 !important", mb: 2 }}>
							<NavLink
								to="/Contact"
								style={{ textDecoration: 'none' }}
							>
								<Typography
									variant="h6"
									sx={{
										color: "#aa3030",
										mb: 1,
										'&:hover': {
											textDecoration: 'underline', // Ensure text is underlined on hover
										},
									}}
								>
									Contact Us
								</Typography>

							</NavLink>
						</Typography>
						<Typography>Email: edunews@newspaper.com</Typography>
						<Typography>Address: 123 Helsinki, Finland</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
							Quick Links
						</Typography>
						<NavLink to="/about" style={{ textDecoration: 'none' }}>
							<Typography variant="body1" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919", mb: 1, '&:hover': { color: '#aa3030' } }}>
								About Us
							</Typography>
						</NavLink>
						<NavLink to="/advertise" style={{ textDecoration: 'none' }}>
							<Typography variant="body1" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919", mb: 1, '&:hover': { color: '#aa3030' } }}>
								Advertise
							</Typography>
						</NavLink>
						<NavLink to="/terms" style={{ textDecoration: 'none' }}>
							<Typography variant="body1" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919", mb: 1, '&:hover': { color: '#aa3030' } }}>
								Terms of Service
							</Typography>
						</NavLink>
						<NavLink to="/PrivacyPolicy" style={{ textDecoration: 'none' }}>
							<Typography variant="body1" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919", '&:hover': { color: '#aa3030' } }}>
								Privacy Policy
							</Typography>
						</NavLink>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6" sx={{ color: "#aa3030", mb: 2 }}>
							Follow Us
						</Typography>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<Link href="https://facebook.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
								Facebook
							</Link>
							<Link href="https://twitter.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
								Twitter
							</Link>
							<Link href="https://instagram.com" target="_blank" color="inherit" underline="hover" sx={{ mb: 1 }}>
								Instagram
							</Link>
						</div>
					</Grid>
				</div>
			</Grid>
			<Divider sx={{ bgcolor: "#545454", my: 4 }} />
			<Box sx={{ textAlign: "center", fontSize: "12px" }}>
				<Typography>
					&copy; 2024 Newspaper Inc. All rights reserved.
				</Typography>
			</Box>
		</div>
	);
}