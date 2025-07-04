import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Card001 = ({
    isbn = 9784046072733, 
    title = "Default Title", 
    description = "This is a default description for the card content. " 
}) => {
    return (
    <Card sx={{ maxWidth: 345, borderRadius: '8px', boxShadow: 3 }}> 
    <CardActionArea>
        <CardMedia
        component="img"
        height="280"
        image={`https://ndlsearch.ndl.go.jp/thumbnail/${isbn}.jpg`}
        alt={title || "card image"} 
        sx={{ objectFit: 'contain' }}
          // 画像がロードできなかった場合のフォールバック
            onError={(e) => {
            e.target.onerror = null; // エラーの無限ループを防ぐ
            e.target.src = "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found";
        }}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title} 
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
};

export default Card001;