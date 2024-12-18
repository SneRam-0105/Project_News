import { useEffect, useState } from "react";
import { Grid, Container, CircularProgress } from "@mui/material";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";

const Business_Page = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5002/Homepage/Business")
			.then((response) => {
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
		<Container sx={{ minHeight: "100vh", minWidth: "100vh" }}>
			{error ? (
				<p>{error}</p>
			) : loading ? (
				<CircularProgress sx={{ color: "#aa3030" }} />
			) : (
				<div style={{ marginBottom: "100px" }}>
					<Grid container spacing={2}>
						{articles?.map((news, index) => (
							<Grid
								item
								key={news.id}
								xs={12}
								sm={index % 6 === 0 ? 6 : 6}
								md={index % 5 === 0 ? 8 : 4}
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<ArticleCard {...news} />
							</Grid>
						))}
					</Grid>
				</div>
			)}
		</Container>
	);
};

export default Business_Page;
