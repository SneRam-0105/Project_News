import { useEffect, useState } from "react";
import axios from "axios";
import {
	Container,
	Grid,
	CircularProgress,
	TextField,
	Box,
	InputAdornment,
} from "@mui/material";

import ArticleCard from "../components/Article/ArticleCard";
import SearchIcon from "@mui/icons-material/Search";

const IT_Page = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filterednews, setFilteredNews] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	// Filter articles based on the search term
	useEffect(() => {
		const lowerCasedSearchTerm = searchTerm.toLowerCase();
		const filtered = articles.filter((news) =>
			news.title.toLowerCase().includes(lowerCasedSearchTerm)
		);
		setFilteredNews(filtered);
	}, [searchTerm, articles]);

	// Fetch articles from the API
	const [error, setError] = useState(null);
	useEffect(() => {
		axios
			.get("http://localhost:5002/Homepage/IT")
			.then((response) => {
				const fetchedArticles = response.data.articles || [];
				setArticles(fetchedArticles);
				setFilteredNews(fetchedArticles); // Initialize filtered news with all articles
				setLoading(false);
				setArticles(response.data.articles);
			})
			.catch((error) => {
				setError(`Error fetching data: ${error.message}`);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<Container sx={{ minHeight: "100vh" }}>
			{error ? (
				<p>{error}</p>
			) : loading ? (
				<CircularProgress sx={{ color: "#aa3030" }} />
			) : (
				<>
					<div>
						<Box sx={{ mb: 3 }}>
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Search news by title"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<div style={{ marginBottom: "50px" }}>
							<Grid container spacing={2} sx={{ alignItems: "stretch" }}>
								{filterednews.length > 0 ? (
									filterednews.map((news, index) => {
										const isSpecial = index % 6 === 0;
										return (
											<Grid
												item
												xs={12}
												md={isSpecial ? 8 : 4}
												key={news.id || index} // Added fallback key for safety
												sx={{ display: "flex" }}
											>
												<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
													<ArticleCard {...news} />
												</div>
											</Grid>
										);
									})
								) : (
									<p>No news found matching your search.</p>
								)}
							</Grid>
						</div>
					</div>

				</>
			)}
		</Container>
	);
};

export default IT_Page;
