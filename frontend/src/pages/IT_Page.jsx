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
                <Grid container spacing={6} sx={{ alignItems: 'stretch' }}>
                    {articles.length > 0 && (
                        <>
                            {/* First Article takes 60% of the width */}
                            <Grid
                                item
                                xs={12}
                                md={8}
                                sx={{ display: 'flex' }}
                            >
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <ArticleCard {...articles[0]} />
                                </div>
                            </Grid>

                            {/* Other articles with uniform sizes */}
                            {articles.slice(1).map((news, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={news.id}
                                    sx={{ display: 'flex' }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <ArticleCard {...news} />
                                    </div>
                                </Grid>
                            ))}
                        </>
                    )}
                </Grid>
            )}
        </Container>
    );
};

export default IT_Page;
