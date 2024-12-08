import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Chip,
} from '@mui/material';

const ArticleCard = ({ title, author, description, url, urlToImage, content, date, category }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                maxWidth: 350,
                boxShadow: 3,
                borderRadius: 1,
                transition: "transform 0.3s, box-shadow 0.3s",
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 5,
                },
            }}
        >
            {/* Card Image */}
            {urlToImage && (
                <CardMedia
                    component="img"
                    height="250"
                    image={urlToImage}
                    alt={title}
                    sx={{ borderRadius: '4px 4px 0 0' }}
                />
            )}

            {/* Card Content */}
            <CardContent sx={{ flexGrow: 1 }}>
                {/* Category */}
                {category && (
                    <Chip
                        label={category}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                    />
                )}

                {/* Title */}
                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ fontSize: '1.2rem', fontWeight: 'bold', lineHeight: 1.3 }}
                >
                    {title}
                </Typography>

                {/* Author and Date */}
                <Typography
                    variant="caption"
                    color="textSecondary"
                    display="block"
                    sx={{ mb: 1, fontSize: '0.9rem' }}
                >
                    {author && <strong>By {author}</strong>} | {date}
                </Typography>

                {/* Description */}
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 3,
                        mb: 0.6,
                        fontSize: '0.7rem',
                    }}
                >
                    {description}
                </Typography>
            </CardContent>

            {/* Button */}
            <Button
                variant="soft"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{
                    fontSize: '0.9rem',
                    backgroundColor: '#aa3030',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#ef5350',
                    },
                }}
            >
                Read More
            </Button>

        </Card>
    );
};

export default ArticleCard;
