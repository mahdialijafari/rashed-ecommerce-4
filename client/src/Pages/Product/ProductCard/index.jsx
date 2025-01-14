import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({id,name,img,price,description}) {
    const navigate=useNavigate()
  return (
    <Card sx={{ width: '100%',height:'420px' }}>
      <CardMedia
        sx={{ height: '50%' }}
        image={import.meta.env.VITE_BASE_URL+img}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description.split(' ').slice(0,9).join(' ')}...
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate(`/product-details/${id}/${name.replaceAll(' ','-')}`)} size="small">More Information</Button>
      </CardActions>
    </Card>
  );
}
