import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Container, Grid, CircularProgress } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";

const IT_Page = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:5002/Homepage/IT")
			.then((response) => {
				setArticles(response.data.articles);
				console.log(response.data.articles);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		<Container>
			{loading ? (
				<CircularProgress />
			) : (
<div style={{marginBottom:"50px"}}>
				<Grid container spacing={2} sx={{ alignItems: "stretch" }}>
					{articles.length > 0 && (
						<>
							{articles?.map((news, index) => {
								const isSpecial = index % 6 === 0;
								return (
									<Grid
										item
										xs={12}
										md={isSpecial ? 8 : 4}
										key={news.id}
										sx={{ display: "flex" }}
									>
										<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
											<ArticleCard {...news} />
										</div>
									</Grid>
								);
							})}
						</>
					)}
				</Grid>
</div>
			)}
		</Container>
	);
};

export default IT_Page;
