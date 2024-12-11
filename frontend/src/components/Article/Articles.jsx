import "./Articles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container } from "@mui/material";
import defaultImage from "../../assets/default-img.jpg";

function Articles() {
	const [itNews, setITNews] = useState([]);
	const [businessNews, setBusinessNews] = useState([]);
	const [educationNews, setEducationNews] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const itResponse = await axios.get("http://localhost:5002/Homepage/IT");
				setITNews(itResponse.data.articles.slice(0, 3));

				const businessResponse = await axios.get("http://localhost:5002/Homepage/Business");
				setBusinessNews(businessResponse.data.articles.slice(0, 3));

				const educationResponse = await axios.get("http://localhost:5002/Homepage/Education/articles");
				setEducationNews(educationResponse.data.slice(0, 3));
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);


	return (
		<div className="main-section">

			<Container className="section">
				<div className="section-header">Information Technology</div>

				{itNews?.map((article) => (
					<div className="card" key={article.id}>
						<Button>
							<div className="card-content" style={{ display: "flex", flexDirection: "column" }}>
								<h6>{article.title}</h6>
								<p style={{ marginTop: "10px" }}>{article.description}</p>
							</div>
							<div className="card-image">
								<img src={article.urlToImage || defaultImage} alt="Card Image" />
							</div></Button>

					</div>
				))}
			</Container>


			<Container className="section">
				<div className="section-header">Business</div>
				{businessNews?.map((article) => (
					<div className="card" key={article.id}>
						<Button>	<div className="card-content">
							<h6>{article.title}</h6>
							<p>{article.description}</p>
						</div>
							<div className="card-image">
								<img src={article.urlToImage || defaultImage} alt="Card Image" />
							</div></Button>

					</div>
				))}
			</Container>


			<Container className="section">
				<div className="section-header">Education</div>
				{educationNews?.map((article, index) => (
					<div className="card" key={index}>
						<Button><div className="card-content">
							<h6>{article.article_title}</h6>
							<p>{article.article_description}</p>
						</div>
							<div className="card-image">
								<img src={article.article_image || defaultImage} alt="Card Image" />
							</div></Button>

					</div>
				))
				}
			</Container >

		</div >
	);
}

export default Articles;
