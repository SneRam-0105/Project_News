import React, { useEffect, useState } from "react";
import { Grid, Container, CircularProgress } from "@mui/material";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";

const Business_Page = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5002/Homepage/Business")
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
                <Grid container spacing={2}>
                    {articles.map((news, index) => (
                        <Grid
                            item
                            key={news.id}
                            xs={12}
                            sm={index % 6 === 0 ? 9 : 3}
                            md={index % 6 === 0 ? 9 : 3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ArticleCard {...news} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Business_Page;
