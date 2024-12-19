import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  CircularProgress,
  TextField,
  Box,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";

const Business_Page = () => {
  const [articles, setArticles] = useState([]);
  // Filtered list of news
  const [filterednews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter articles based on search term
  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    const filtered = articles.filter((news) =>
      news.title.toLowerCase().includes(lowerCasedSearchTerm)
    );
    setFilteredNews(filtered);
  }, [searchTerm, articles]);

  // Fetching articles from the API here	const [error, setError] = useState(null);

  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5002/Homepage/Business")
      .then((response) => {
        const fetchedArticles = response.data.articles || [];
        setArticles(fetchedArticles);
        setFilteredNews(fetchedArticles); // Initialize with all articles
        console.log(response.data.articles);
        setLoading(false);
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
          {/* Search Bar */}
          <Box sx={{ mb: 3, mt: 3, }}>
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

          {/* Articles Grid */}
          <Grid container spacing={2}>
            {filterednews.length > 0 ? (
              filterednews.map((news, index) => (
                <Grid
                  item
                  key={news.id || index}
                  sm={index % 6 === 0 ? 6 : 6}
                  md={index % 5 === 0 ? 8 : 4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ArticleCard {...news} />
                </Grid>
              ))
            ) : (
              <p>No news found matching your search.</p>
            )}
          </Grid>
        </div>
      )}
    </Container>
  );
};

export default Business_Page;
