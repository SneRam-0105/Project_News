import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";
import { Grid, Container, CircularProgress } from "@mui/material";

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
                <Grid container spacing={3}>
                    {articles.map((news) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={news.id}
                            sx={{ display: 'flex' }} // Ensures all cards take the same height
                        >
                            {/* Ensuring each card stretches to the same height */}
                            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <ArticleCard {...news} />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default IT_Page;
