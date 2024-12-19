import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { Container, Grid, CircularProgress, TextField, Box, InputAdornment } from "@mui/material";
import ArticleCard from "../components/Article/ArticleCard";
import SearchIcon from "@mui/icons-material/Search";

const IT_Page = () => {
  const { isDarkMode } = useOutletContext();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterednews, setFilteredNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter articles based on the search term
  useEffect(() => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    const filtered = articles.filter((news) =>
      news.title.toLowerCase().includes(lowerCasedSearchTerm)
    );
    setFilteredNews(filtered);
  }, [searchTerm, articles]);

  // Fetch articles from the API
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5002/Homepage/IT")
      .then((response) => {
        const fetchedArticles = response.data.articles || [];
        setArticles(fetchedArticles);
        setFilteredNews(fetchedArticles); // Initialize filtered news with all articles
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
    <div style={{ backgroundColor: isDarkMode ? "#191919" : "#e6e6e6", paddingBottom:"70px" }}>
      <Container sx={{ minHeight: "100vh", paddingBottom: 0 }}>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <CircularProgress sx={{ color: "#aa3030" }} />
        ) : (
          <>
            <div>
              <Box sx={{ mb: 3, pt: "35px" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search news by title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: isDarkMode ? "#e6e6e6" : "#191919" }} />
                      </InputAdornment>
                    ),
                    style: {
                      color: isDarkMode ? "#e6e6e6" : "#191919", // Set the text color
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: isDarkMode ? "#e6e6e6" : "#191919", // Set placeholder color
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: isDarkMode ? "#e6e6e6" : "#191919", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: isDarkMode ? "#cccccc" : "#333333", // Hover border color
                      },
                    },
                  }}
                />
              </Box>

              <div>
                <Grid container spacing={2} sx={{ alignItems: "stretch", marginBottom: 0 }}>
                  {filterednews.length > 0 ? (
                    filterednews.map((news, index) => {
                      const isSpecial = index % 6 === 0;
                      return (
                        <Grid
                          item
                          xs={12}
                          md={isSpecial ? 8 : 4}
                          key={news.id || index}
                          sx={{ display: "flex" }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                            <ArticleCard {...news} isDarkMode={isDarkMode} />
                          </div>
                        </Grid>
                      );
                    })
                  ) : (
                    <p style={{ color: isDarkMode ? "#e6e6e6" : "#191919" }}>
                      No news found matching your search.
                    </p>
                  )}
                </Grid>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default IT_Page;
