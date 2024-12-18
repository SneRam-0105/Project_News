import { useEffect, useState } from "react";
import { Box, Typography, Card, Container, CardContent, Button, Grid2, CardMedia, CircularProgress } from "@mui/material";

const Education = () => {
	const [faculties, setFaculties] = useState([]);
	const [articles, setArticles] = useState([]);
	const [contactInfo, setContactInfo] = useState([]);
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("http://localhost:5002/Homepage/Education/faculties")
			.then(response => response.json())
			.then(data => setFaculties(data))
			.catch(error => console.error("Failed to fetch faculties:", error));

		fetch("http://localhost:5002/Homepage/Education/articles")
			.then(response => response.json())
			.then(data => setArticles(data))
			.catch(error => console.error("Failed to fetch articles:", error));

		fetch("http://localhost:5002/Homepage/Education/contact")
			.then(response => response.json())
			.then(data => {

				setContactInfo(Array.isArray(data) ? data : []);
			})
			.catch(error => setError("Failed to fetch contact info:", error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<Container sx={{ minHeight: "100vh", minWidth: "100vh" }}>
{error ? <p>{error}</p > : loading ? <CircularProgress sx={{color:"#aa3030"}}/> : <div style={{ marginBottom: "50px" }}>
				<Box sx={{ padding: 10, background: '#f5f5f5', minWidth: "100vh" }}>

					{/* Heading Section */}
					<Typography variant="h4" align="center" gutterBottom fontWeight="bold">
						🎓 Education 📚
					</Typography>

					{/* Faculties Section */}
					<Grid2 container spacing={4}>
						{faculties?.map((faculty) => (
							<Grid2 item xs={12} sm={6} md={4} key={faculty.educationId}>
								<Card sx={{ transition: '0.3s', "&:hover": { transform: "scale(1.05)" } }}>
									<CardContent>
										<Typography variant="h6" sx={{ fontWeight: "bold" }}>{faculty.faculty}</Typography>
										<Typography>Articles: {faculty.articles_number}</Typography>
										<Button href={faculty.web_link} target="_blank" sx={{ mt: 2 }}>
											🔗 View Resources
										</Button>
									</CardContent>
								</Card>
							</Grid2>
						))}
					</Grid2>

					{/* Latest Articles Section */}
					<Typography variant="h4" align="center" sx={{ mt: 6, mb: 2 }}>
						📰 Latest Articles
					</Typography>

					<Grid2 container spacing={4}>
						{articles?.map((article) => (
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
										<Button fullWidth variant="outlined" color="primary">
											Read More
										</Button>
									</Box>
								</Card>
							</Grid2>
						))}
					</Grid2>
					{/* Contact Information */}
					<Typography variant="h4" sx={{ mt: 6, mb: 2, fontWeight: 'bold' }}>
						📞 Contact Information
					</Typography>

					<Grid2 container spacing={4}>
						{contactInfo?.map((info) => (
							<Grid2 item xs={12} sm={6} md={4} key={info.email}>
								<Card sx={{ boxShadow: 3, borderRadius: 2, }}>
									<CardContent>
										<Typography variant="h6" color="darkred">
											<strong>Email:</strong> {info.email}
										</Typography>
										<Typography>
											<strong>Address:</strong> {info.address}
										</Typography>
										<Typography>
											<strong>Phone:</strong> {info.phone_number}
										</Typography>
									</CardContent>
								</Card>
							</Grid2>
						))}
					</Grid2>
				</Box>
			</div>}
			
		</Container>
	);
};

export default Education;
