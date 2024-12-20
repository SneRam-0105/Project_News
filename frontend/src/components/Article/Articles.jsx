import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import defaultImage from "../../assets/default-img.jpg";
import { useOutletContext } from "react-router-dom";

function Articles() {
  const { isDarkMode } = useOutletContext();
  const [itNews, setITNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [educationNews, setEducationNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responses = await Promise.all([
          axios.get("http://localhost:5002/Homepage/IT"),
          axios.get("http://localhost:5002/Homepage/Business"),
          axios.get("http://localhost:5002/Homepage/Education/articles"),
        ]);

        setITNews(responses[0].data.articles.slice(0, 3));
        setBusinessNews(responses[1].data.articles.slice(0, 3));
        setEducationNews(responses[2].data.slice(0, 3));
      } catch (error) {
        setError(`Error fetching news: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleCardClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  const cardStyles = {
    backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#191919",
    buttonBackground: isDarkMode ? "#333" : "#fff",
    buttonColor: isDarkMode ? "#e6e6e6" : "#aa3030",
    hoverBackground: isDarkMode ? "#555" : "#aa3030",
    hoverColor: isDarkMode ? "#fff" : "#fff",
  };

  const modalStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#e0e0e0" : "#191919",
    boxShadow: 24,
    buttonBackground: isDarkMode ? "#191919" : "#aa3030",
    buttonColor: "#aa3030",
  };

  const renderNewsSection = (news, title) => (
    <Grid item xs={12} sm={4}>
      <Typography variant="h6" gutterBottom sx={{ color: "#aa3030" }}>
        {title}
      </Typography>
      {news.map((article, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(article)}
          sx={{
            cursor: "pointer",
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            height: 300,
            backgroundColor: cardStyles.backgroundColor,
            color: cardStyles.color,
            boxShadow: 3,
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 5,
              backgroundColor: cardStyles.hoverBackground,
              color: cardStyles.hoverColor,
            },
          }}
        >
          <CardMedia
            component="img"
            image={article.urlToImage || article.article_image || defaultImage}
            alt={article.title || article.article_title || "News Image"}
            sx={{
              height: 180,
              objectFit: "cover",
              borderRadius: "4px 4px 0 0",
            }}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
              {article.title || article.article_title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );

  return (
    <div>
      <Container sx={{ minHeight: "100vh", minWidth: "100vh" }}>
        {error ? (
          <Typography sx={{ marginY: 4, color: "error", align: "center" }}>
            {error}
          </Typography>
        ) : loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress sx={{ color: "#aa3030" }} />
          </Box>
        ) : (
          <Container sx={{ marginY: 4 }}>
            <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
              {renderNewsSection(itNews, "Information Technology")}
              {renderNewsSection(businessNews, "Business")}
              {renderNewsSection(educationNews, "Education")}
            </Grid>
          </Container>
        )}
      </Container>

      <Modal open={selectedArticle} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            bgcolor: modalStyles.backgroundColor,
            boxShadow: modalStyles.boxShadow,
            transform: "translate(-50%, -50%)",
            p: 4,
            color: modalStyles.color,
          }}
        >
          {selectedArticle && (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedArticle.title || selectedArticle.article_title}
              </Typography>
              <Divider variant="middle" sx={{ mb: "10px" }} />
              <Typography variant="subtitle1">
                {selectedArticle.description}
              </Typography>
              <Typography
                onClick={() => window.open(selectedArticle.url, "_blank")}
                style={{
                  textDecoration: "none",
                  color: modalStyles.buttonColor,
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Read More
              </Typography>
              <img
                src={
                  selectedArticle.urlToImage ||
                  selectedArticle.article_image ||
                  defaultImage
                }
                alt="Modal"
                style={{ width: "100%", marginTop: "20px" }}
              />
              <Button
                onClick={handleCloseModal}
                variant="contained"
                sx={{
                  marginTop: 2,
                  backgroundColor: modalStyles.buttonBackground,
                }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Articles;
