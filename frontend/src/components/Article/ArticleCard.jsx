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
	CircularProgress,
	Divider,
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
	isDarkMode,
	loading,
	error,
}) => {
	const [bookmarked, setBookmarked] = useState(false);
	const [likes, setLikes] = useState(0);
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		const savedArticles = JSON.parse(localStorage.getItem("bookmarkedArticles")) || [];
		setBookmarked(savedArticles.includes(id));

		const storedLikes = JSON.parse(localStorage.getItem(`likes-${id}`)) || 0;
		setLikes(storedLikes);
		setLiked(localStorage.getItem(`likes-${id}`) ? true : false);
	}, [id]);

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

	const handleLike = () => {
		const newLikes = liked ? likes + 1 : likes - 1;
		localStorage.setItem(`likes-${id}`, JSON.stringify(newLikes));
		setLikes(newLikes);
		setLiked(!liked);
	};

	const handleShare = () => {
		navigator.clipboard.writeText(url);
		alert("Article link copied to clipboard!");
	};

	if (loading) {
		return (
			<Card sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress sx={{ color: isDarkMode ? "#e6e6e6" : "#191919" }} />
			</Card>
		);
	}

	if (error) {
		return (
			<Card sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Typography variant="h6" color="error">
					Error loading article: {error.message}
				</Typography>
			</Card>
		);
	}

	return (
		<div>
			<Card
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					mt: 2,
					mb: 3,
					height: "100%",
					backgroundColor: isDarkMode ? "#1e1e1e" : "#e6e6e6",
					color: isDarkMode ? "#e6e6e6" : "#191919",
					boxShadow: 3,
					borderRadius: "1px",
					transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
					"&:hover": {
						transform: "scale(1.02)",
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
							sx={{
								mb: 1,
								px: "50px",
								backgroundColor: isDarkMode ? "#3e3e3e" : "#f0f0f0",
							}}
						/>
					)}

					<Typography
						variant="h6"
						component="div"
						gutterBottom
						sx={{
							fontSize: "1.2rem",
							fontWeight: "bold",
							lineHeight: 1.3,
							color: isDarkMode ? "#e6e6e6" : "#191919",
						}}
					>
						{title}
					</Typography>

					<Typography
						variant="caption"
						color="textSecondary"
						display="block"
						sx={{
							mb: 1,
							fontSize: "0.05rem",
							color: isDarkMode ? "#e6e6e6" : "#191919",
						}}
					>
						{author && <strong>By {author}</strong>} | {date}
					</Typography>
					<Divider variant="middle" sx={{mb:2}}/>
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
							color: isDarkMode ? "#bbb" : "#191919",
						}}
					>
						{description}
					</Typography>

					{/* Like Button */}
					<div style={{ display: "flex", alignItems: "center" }}>
						<IconButton
							onClick={handleLike}
							sx={{ color: liked ? "#aa3030" : (isDarkMode ? "#e6e6e6" : "#191919") }}
						>
							{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
						</IconButton>
						<Typography variant="body2" sx={{ color: isDarkMode ? "#e6e6e6" : "#191919" }}>
							{likes} Likes
						</Typography>
					</div>

					{/* Bookmark Button */}
					<IconButton
						onClick={handleBookmark}
						sx={{ color: bookmarked ? "primary" : (isDarkMode ? "#e6e6e6" : "#191919") }}
					>
						{bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
					</IconButton>

					{/* Share Button */}
					<Tooltip title="Share">
						<IconButton onClick={handleShare}>
							<ShareIcon sx={{ color: isDarkMode ? "#e6e6e6" : "#191919" }}
							/>
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
						backgroundColor: isDarkMode ? "#333" : "#fff",  // Button color change for dark mode
						color: isDarkMode ? "#fff" : "#aa3030",  // Adjust text color based on mode
						"&:hover": {
							backgroundColor: "#aa3030",
							color: "#fff",
						},
					}}
				>
					Read More
				</Button>
			</Card ></div>
	);
};

export default ArticleCard;
