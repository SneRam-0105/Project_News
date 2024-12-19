import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid2,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

const Education = () => {
  const [faculties, setFaculties] = useState([]);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5002/Homepage/Education/faculties")
      .then((response) => response.json())
      .then((data) => setFaculties(data))
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });

    fetch("http://localhost:5002/Homepage/Education/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        marginBottom: "20px",
        margin: 0,
        padding: 0,
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ padding: 6, background: "#fff" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            color: "#aa3030",
            mb: 2,
          }}
        >
          Education
        </Typography>

        {/* Heading Section */}
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          🎓 Categories 📚
        </Typography>

        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 6, mb: 1, color: "#aa3030" }}
        ></Typography>

        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 6, mb: 1, color: "#aa3030" }}
        ></Typography>

        <Grid2 container spacing={4}>
          {articles.map((article) => (
            <Grid2 item xs={12} sm={6} md={4} key={article.articleId}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
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
                  <Button
                    component={Link}
                    to={article.article_link}
                    target="_blank"
                    variant="outlined"
                    color="#aa3030"
                    sx={{ mt: 2 }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default Education;
