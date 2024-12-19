import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Box,
} from "@mui/material";
import defaultImage from "../../assets/default-img.jpg";


function Articles() {
  const [itNews, setITNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [educationNews, setEducationNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const itResponse = await axios.get("http://localhost:5002/Homepage/IT");
        setITNews(itResponse.data.articles.slice(0, 3));

        const businessResponse = await axios.get(
          "http://localhost:5002/Homepage/Business"
        );
        setBusinessNews(businessResponse.data.articles.slice(0, 3));

				const educationResponse = await axios.get(
					"http://localhost:5002/Homepage/Education/articles"
				);
				setEducationNews(educationResponse.data.slice(0, 3));
			} catch (error) {
				setError(`Error fetching news: ${error.message}`);
			} finally {
				setLoading(false);
			}
		};

    fetchNews();
  }, []);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

	return (
		<div>
			<Container sx={{minHeight:"100vh", minWidth:"100vh"}}>{error ? (
				<Typography sx={{ marginY: 4, color:"error", align:"center" }}>
					{error}
				</Typography>
			) : loading ? (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<CircularProgress sx={{ color: "#aa3030" }} />
				</Box>
			) : (
				<Container sx={{ marginY: 4 }}>
					<Grid container spacing={4} sx={{ alignItems: "stretch" }}>

						<Grid item xs={12} sm={4}>
							<Typography variant="h6" gutterBottom sx={{
								color: "#aa3030",
							}}>
								Information Technology
							</Typography>
							{itNews.map((article, index) => (
								<Card
									key={index}
									onClick={() => handleCardClick(article)}
									sx={{
										cursor: "pointer",
										marginBottom: 3,
										display: "flex",
										flexDirection: "column",
										height: 300,
									}}
								>
									<CardMedia
										component="img"
										image={article.urlToImage || defaultImage}
										alt={article.title || "News Image"}
										sx={{
											height: 180,
											objectFit: "cover",
											borderRadius: "4px 4px 0 0",
										}}
									/>
									<CardContent sx={{ flex: 1 }}>
										<Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
											{article.title}
										</Typography>
									</CardContent>
								</Card>
							))}
						</Grid>

						<Grid item xs={12} sm={4}>
							<Typography variant="h6" gutterBottom sx={{
								color: "#aa3030",
							}}>
								Business
							</Typography>
							{businessNews.map((article, index) => (
								<Card
									key={index}
									onClick={() => handleCardClick(article)}
									sx={{
										cursor: "pointer",
										marginBottom: 3,
										display: "flex",
										flexDirection: "column",
										height: 300,
									}}
								>
									<CardMedia
										component="img"
										image={article.urlToImage || defaultImage}
										alt={article.title || "News Image"}
										sx={{
											height: 180,
											objectFit: "cover",
											borderRadius: "4px 4px 0 0",
										}}
									/>
									<CardContent sx={{ flex: 1 }}>
										<Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
											{article.title}
										</Typography>
									</CardContent>
								</Card>
							))}
						</Grid>

						<Grid item xs={12} sm={4}>
							<Typography variant="h6" gutterBottom sx={{
								color: "#aa3030",
							}}>
								Education
							</Typography>
							{educationNews.map((article, index) => (
								<Card
									key={index}
									onClick={() => handleCardClick(article)}
									sx={{
										cursor: "pointer",
										marginBottom: 3,
										display: "flex",
										flexDirection: "column",
										height: 300,
									}}
								>
									<CardMedia
										component="img"
										image={article.article_image || defaultImage}
										alt={article.article_title || "News Image"}
										sx={{
											height: 180,
											objectFit: "cover",
											borderRadius: "4px 4px 0 0",
										}}
									/>
									<CardContent sx={{ flex: 1 }}>
										<Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
											{article.article_title}
										</Typography>
									</CardContent>
								</Card>
							))}
						</Grid>
					</Grid>
				</Container>
			)}</Container>

			<Modal open={selectedArticle} onClose={handleCloseModal}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						width: 400,
						bgcolor: "background.paper",
						boxShadow: 24,
						transform: "translate(-50%, -50%)",
						p: 4,
					}}
				>
					{selectedArticle && (
						<>
							<Typography variant="h6" gutterBottom>
								{selectedArticle.title || selectedArticle.article_title}
							</Typography>
							<Typography variant="subtitle1">
								{selectedArticle.description}
							</Typography>
							<Typography
								onClick={() => window.open(selectedArticle.url, '_blank')}
								style={{ textDecoration: 'none', color: '#aa3030', cursor: 'pointer' }}
							>
								Read More
							</Typography>
							<img
								src={
									selectedArticle.urlToImage ||
									selectedArticle.article_image ||
									defaultImage
								}
								alt="Modal"
								style={{ width: "100%", marginTop: "20px" }}
							/>
							<Button
								onClick={handleCloseModal}
								variant="contained"
								sx={{
									marginTop: 2,
									backgroundColor: "#aa3030",
								}}
							>
								Close
							</Button>
						</>
					)}
				</Box>
			</Modal>
		</div>
	);
}

export default Articles;
