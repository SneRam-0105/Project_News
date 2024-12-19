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

        <Grid2 container spacing={4}>
          {error ? (
            <p>{error}</p>
          ) : loading ? (
            <CircularProgress sx={{ color: "#aa3030" }} />
          ) : (
            faculties?.map((faculty) => (
              <Grid2 item xs={12} sm={6} md={4} key={faculty.educationId}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    width: "200px",
                    backgroundColor: "#fff",
                    boxShadow: 3,
                    borderRadius: "4px",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 5,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 1.3,
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      {faculty.faculty}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontSize: "1rem",
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      Articles: {faculty.articles_number}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    href={faculty.web_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{
                      fontSize: "0.9rem",
                      backgroundColor: "#fff",
                      color: "#aa3030",
                      borderRadius: 0,
                      "&:hover": {
                        backgroundColor: "#aa3030",
                        color: "#fff",
                      },
                    }}
                  >
                    View Resources
                  </Button>
                </Card>
              </Grid2>
            ))
          )}
        </Grid2>

        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 6, mb: 1, color: "#aa3030" }}
        ></Typography>

        <Grid2 container spacing={4} sx={{ mb: 5 }}>
          {articles?.map((article) => (
            <Grid2 item xs={12} sm={6} md={4} key={article.articleId}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  mt: 2,
                  mb: 3,
                  height: "100%",
                  width: "550px",
                  backgroundColor: "#fff",
                  boxShadow: 3,
                  borderRadius: "4px",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://picsum.photos/500/300?random=${article.articleId}`}
                  alt={`Random Article ${article.articleId}`}
                  sx={{ borderRadius: "4px 4px 0 0" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.article_title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                      fontSize: "0.9rem",
                    }}
                  >
                    {article.article_description.substring(0, 100)}...
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    fontSize: "0.9rem",
                    backgroundColor: "#fff",
                    color: "#aa3030",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "#aa3030",
                      color: "#fff",
                    },
                  }}
                >
                  Read More
                </Button>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default Education;
