import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Grid2, CardMedia } from "@mui/material";
import { useOutletContext } from "react-router-dom";

import { Link } from 'react-router-dom';

const Education = () => {
const { isDarkMode } = useOutletContext();
	const [faculties, setFaculties] = useState([]);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5002/Homepage/Education/faculties")
			.then((response) => response.json())
			.then((data) => setFaculties(data))
			.catch((error) => console.error("Failed to fetch faculties:", error));

		fetch("http://localhost:5002/Homepage/Education/articles")
			.then((response) => response.json())
			.then((data) => setArticles(data))
			.catch((error) => console.error("Failed to fetch articles:", error));
	}, []);

	// Conditional styles for dark mode
	const darkModeStyles = {
		background: isDarkMode ? "#121212" : "#fff",
		color: isDarkMode ? "#e0e0e0" : "#191919",
		cardBackground: isDarkMode ? "#1e1e1e" : "#f2f4f5",
		buttonBackground: isDarkMode ? "#aa3030" : "#fff",
		buttonColor: isDarkMode ? "#e6e6e6" : "#aa3030",
		hoverBackground: isDarkMode ? "#555" : "#aa3030",
		hoverColor: isDarkMode ? "#fff" : "#fff",
	};

	return (
		<div style={{ marginBottom: "20px", margin: 0, padding: 0, width: "100%" }}>
			<Box sx={{ padding: 6, background: darkModeStyles.background }}>
				<Typography
					variant="h4"
					align="center"
					sx={{
						color: darkModeStyles.color,
						mb: 2,
					}}
				>
					🎓 Categories 📚
				</Typography>

				{/* Faculty Cards */}
				<Grid2
					container
					spacing={4}
					sx={{
						justifyContent: { xs: "flex-start", md: "center" },
						alignItems: { xs: "flex-start", md: "center" },
					}}
				>
					{faculties.map((faculty) => (
						<Grid2 item xs={12} sm={6} md={4} key={faculty.educationId}>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "200px",
									width: "200px",
									backgroundColor: darkModeStyles.cardBackground,
									boxShadow: 3,
									borderRadius: "4px",
									transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
									"&:hover": {
										transform: "scale(1.05)",
										boxShadow: 5,
									},
								}}
							>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										component="div"
										gutterBottom
										sx={{
											fontSize: "1.2rem",
											fontWeight: "bold",
											lineHeight: 1.3,
											mb: 1,
											textAlign: "center",
											color: darkModeStyles.color,
										}}
									>
										{faculty.faculty}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										sx={{
											fontSize: "1rem",
											textAlign: "center",
											mb: 2,
											color: darkModeStyles.color,
										}}
									>
										Articles: {faculty.articles_number}
									</Typography>
								</CardContent>
								<Button
									variant="contained"
									href={faculty.web_link}
									target="_blank"
									rel="noopener noreferrer"
									fullWidth
									sx={{
										fontSize: "0.9rem",
										backgroundColor: darkModeStyles.buttonBackground,
										color: darkModeStyles.buttonColor,
										borderRadius: 0,
										"&:hover": {
											backgroundColor: darkModeStyles.hoverBackground,
											color: darkModeStyles.hoverColor,
										},
									}}
								>
									View Resources
								</Button>
							</Card>
						</Grid2>
					))}
				</Grid2>

				{/* Articles */}
				<Typography
					variant="h4"
					align="center"
					sx={{ mt: 6, mb: 1, color: darkModeStyles.color }}
				>
					Articles
				</Typography>

				<Grid2
					container
					spacing={4}
					sx={{
						justifyContent: { xs: "flex-start", md: "center" },
						alignItems: { xs: "flex-start", md: "center" },
						mb: 5,
					}}
				>
					{articles.map((article) => (
						<Grid2 item xs={12} sm={6} md={4} key={article.articleId}>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									mt: 2,
									mb: 3,
									height: "100%",
									width: "550px",
									backgroundColor: darkModeStyles.cardBackground,
									boxShadow: 3,
									borderRadius: "4px",
									transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
									"&:hover": {
										transform: "scale(1.05)",
										boxShadow: 5,
									},
								}}
							>
								<CardMedia
									component="img"
									image={`https://picsum.photos/500/300?random=${article.articleId}`}
									alt={`Random Article ${article.articleId}`}
									sx={{ borderRadius: "4px 4px 0 0" }}
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography
										variant="h6"
										component="div"
										gutterBottom
										sx={{
											fontSize: "1.2rem",
											fontWeight: "bold",
											lineHeight: 1.3,
											color: darkModeStyles.color,
										}}
									>
										{article.article_title}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										sx={{
											display: "-webkit-box",
											WebkitBoxOrient: "vertical",
											overflow: "hidden",
											WebkitLineClamp: 3,
											fontSize: "0.9rem",
											color: darkModeStyles.color,
										}}
									>
										{article.article_description.substring(0, 100)}...
									</Typography>
								</CardContent>
								<Button
									variant="contained"
									fullWidth
									sx={{
										fontSize: "0.9rem",
										backgroundColor: darkModeStyles.buttonBackground,
										color: darkModeStyles.buttonColor,
										borderRadius: 0,
										"&:hover": {
											backgroundColor: darkModeStyles.hoverBackground,
											color: darkModeStyles.hoverColor,
										},
									}}
								>
									Read More
								</Button>
							</Card>
						</Grid2>
					))}
				</Grid2>
			</Box>
		</div>
	);
};

export default Education;
