import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Button, Grid2, CardMedia, CircularProgress } from "@mui/material";
import { Link } from 'react-router-dom';

const Education = () => {
	const [faculties, setFaculties] = useState([]);
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("http://localhost:5002/Homepage/Education/faculties")
			.then(response => response.json())
			.then(data => setFaculties(data))
			.catch((error) => {
				setError(`Error fetching data: ${error.message}`);
			})
			.finally(() => {
				setLoading(false);
			});

		fetch("http://localhost:5002/Homepage/Education/articles")
			.then(response => response.json())
			.then(data => setArticles(data))
			.catch((error) => {
				setError(`Error fetching data: ${error.message}`);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div style={{ marginBottom: "20px", margin: 0, padding: 0, width: "100%", minHeight: "100vh" }}>
			<Box sx={{ padding: 6, background: '#fff' }}>

				{/* Heading Section */}
				<Typography variant="h4" align="center" gutterBottom fontWeight="bold">
					🎓 Categories 📚
				</Typography>

				<Grid2 container spacing={4}>
					{error ? <p>{error}</p> : loading ? <CircularProgress sx={{ color: "#aa3030" }} /> : faculties?.map((faculty) => (
						<Grid2 item xs={12} sm={6} md={4} key={faculty.educationId}>
							<Card
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									height: "100%",
									width: "200px",
									backgroundColor: "#fff",
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
										backgroundColor: "#fff",
										color: "#aa3030",
										borderRadius: 0,
										"&:hover": {
											backgroundColor: "#aa3030",
											color: "#fff",
										},
									}}
								>
									View Resources
								</Button>
							</Card>
						</Grid2>
					))}
				</Grid2>


				<Typography variant="h4" align="center" sx={{ mt: 6, mb: 1, color: "#aa3030" }}>
				</Typography>

				<Grid2 container spacing={4}>
					{articles.map((article) => (
						<Grid2 item xs={12} sm={6} md={4} key={article.articleId}>
							<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
								<CardMedia
									component="img"
									height="140"
									image={`https://picsum.photos/500/300?random=${article.articleId}`}
									alt={`Random Article ${article.articleId}`}
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom fontWeight="bold">
										{article.article_title}
									</Typography>
									<Typography variant="body2" color="textSecondary">
										{article.article_description.substring(0, 100)}...
									</Typography>
								</CardContent>
								<Box sx={{ padding: 2 }}>
									<Button component={Link} to={article.article_link} target="_blank" variant="outlined" color="#aa3030" sx={{ mt: 2 }}>
										Read More
									</Button>
								</Box>
							</Card>
						</Grid2>
					))}
				</Grid2>


			</Box></div>

	);
};

export default Education;
