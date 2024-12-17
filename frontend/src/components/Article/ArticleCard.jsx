import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
    IconButton,
    Tooltip,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import defaultImage from "../../assets/default-img.jpg";

const ArticleCard = ({
    id,
    title,
    author,
    description,
    url,
    urlToImage,
    date,
    category,
}) => {
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    // Check LocalStorage for bookmarks and likes on initial load
    useEffect(() => {
        const savedArticles = JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
        setBookmarked(savedArticles.includes(id));

        const storedLikes = JSON.parse(localStorage.getItem(`likes-${id}`)) || 0;
        setLikes(storedLikes);
        setLiked(localStorage.getItem(`likes-${id}`) ? true : false);
    }, [id]);

    // Handle Bookmark Toggle
    const handleBookmark = () => {
        const savedArticles = JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
        if (bookmarked) {
            const updatedArticles = savedArticles.filter((articleId) => articleId !== id);
            localStorage.setItem("bookmarkedArticles", JSON.stringify(updatedArticles));
        } else {
            savedArticles.push(id);
            localStorage.setItem("bookmarkedArticles", JSON.stringify(savedArticles));
        }
        setBookmarked(!bookmarked);
    };

    // Handle Like Button
    const handleLike = () => {
        const newLikes = liked ? likes - 1 : likes + 1;
        localStorage.setItem(`likes-${id}`, JSON.stringify(newLikes));
        setLikes(newLikes);
        setLiked(!liked);
    };

    // Handle Share Button (Copy Link)
    const handleShare = () => {
        navigator.clipboard.writeText(url);
        alert("Article link copied to clipboard!");
    };

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                mt: 2,
                mb: 3,
                height: "100%",
                backgroundColor: "#fff",
                boxShadow: 3,
                borderRadius: "1px",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 5,
                },
            }}
        >
            <CardMedia
                component="img"
                height="250"
                image={urlToImage || defaultImage}
                alt={title}
                sx={{ borderRadius: "4px 4px 0 0" }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
                {category && (
                    <Chip
                        label={category}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                    />
                )}

                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ fontSize: "1.2rem", fontWeight: "bold", lineHeight: 1.3 }}
                >
                    {title}
                </Typography>

                <Typography
                    variant="caption"
                    color="textSecondary"
                    display="block"
                    sx={{ mb: 1, fontSize: "0.9rem" }}
                >
                    {author && <strong>By {author}</strong>} | {date}
                </Typography>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        mb: 0.6,
                        fontSize: "0.7rem",
                    }}
                >
                    {description}
                </Typography>

                {/* Like Button */}
                <IconButton onClick={handleLike} color={liked ? "error" : "default"}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                    {likes} Likes
                </Typography>

                {/* Bookmark Button */}
                <IconButton
                    onClick={handleBookmark}
                    color={bookmarked ? "primary" : "default"}
                >
                    {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>

                {/* Share Button */}
                <Tooltip title="Share">
                    <IconButton onClick={handleShare}>
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
            </CardContent>

            <Button
                fullWidth
                variant="contained"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    fontSize: "0.9rem",
                    backgroundColor: "#fff",
                    color: "#aa3030",
                    "&:hover": {
                        backgroundColor: "#aa3030",
                        color: "#fff",
                    },
                }}
            >
                Read More
            </Button>
        </Card>
    );
};

export default ArticleCard;
