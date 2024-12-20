import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Grid, Container, CircularProgress, TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";


const Business_Page = () => {
	const { isDarkMode } = useOutletContext();
	const [articles, setArticles] = useState([]);
	const [filterednews, setFilteredNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");


	useEffect(() => {
		const lowerCasedSearchTerm = searchTerm.toLowerCase();
		const filtered = articles.filter((news) =>
			news.title.toLowerCase().includes(lowerCasedSearchTerm)
		);
		setFilteredNews(filtered);
	}, [searchTerm, articles]);

	const [error, setError] = useState(null);
	useEffect(() => {
		axios
			.get("http://localhost:5002/Homepage/Business")
			.then((response) => {
				const fetchedArticles = response.data.articles || [];
				setArticles(fetchedArticles);
				setFilteredNews(fetchedArticles);
				console.log(response.data.articles);
				setLoading(false);
			})
			.catch((error) => {
				setError(`Error fetching data: ${error.message}`);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div style={{ backgroundColor: isDarkMode ? "#191919" : "#e6e6e6", paddingBottom: "70px" }}>
			<Container sx={{ minHeight: "100vh", minWidth: "100vh" }}>
				{error ? (
					<p>{error}</p>
				) : loading ? (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh', // Set to full viewport height or adjust as needed
							position: 'relative',
						}}
					>
						<CircularProgress
							sx={{
								color: "#aa3030",
							}}
						/>
					</Box>

				) : (
					<div style={{ marginBottom: "100px" }}>
						{/* Search Bar */}
						<Box sx={{ mb: 3, pt: "35px" }}>
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Search news by title"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon sx={{ color: isDarkMode ? "#e6e6e6" : "#191919" }} />
										</InputAdornment>
									),
									style: {
										color: isDarkMode ? "#e6e6e6" : "#191919", // Set the text color
									},
								}}
								InputLabelProps={{
									style: {
										color: isDarkMode ? "#e6e6e6" : "#191919", // Set placeholder color
									},
								}}
								sx={{
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: isDarkMode ? "#e6e6e6" : "#191919", // Border color
										},
										"&:hover fieldset": {
											borderColor: isDarkMode ? "#cccccc" : "#333333", // Hover border color
										},
									},
								}}
							/>

						</Box>

						{/* Articles Grid */}
						<Grid container spacing={2}>
							{filterednews.length > 0 ? (
								filterednews.map((news, index) => (
									<Grid
										item
										key={news.id || index}
										sm={index % 6 === 0 ? 6 : 6}
										md={index % 5 === 0 ? 8 : 4}
										sx={{
											display: "flex",
											justifyContent: "center",
										}}
									>
										<ArticleCard {...news} isDarkMode={isDarkMode} />
									</Grid>
								))
							) : (
								<p>No news found matching your search.</p>
							)}
						</Grid>
					</div>
				)}
			</Container>
		</div>
	);
};

export default Business_Page;
