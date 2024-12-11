import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
} from "@mui/material";
import defaultImage from "../../assets/default-img.jpg";

const ArticleCard = ({ title, author, description, url, urlToImage, date, category }) => {
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
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 1.3,
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
                        fontSize: "0.9rem",
                    }}
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
            </CardContent>


            <Button
                variant="contained"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                    fontSize: "0.9rem",
                    backgroundColor: "#fff",
                    borderRadius: 0,
                    color: "#aa3030",
                    "&:hover": {
                        backgroundColor: "#aa3030",
                    },
                }}
            >
                Read More
            </Button>
        </Card>
    );
};

export default ArticleCard;
