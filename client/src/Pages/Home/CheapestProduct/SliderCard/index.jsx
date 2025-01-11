import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function SliderCard({img,desc,name,id,price}) {
  const navigate=useNavigate()
  return (
    <Card sx={{ width:'100%',height:'100%' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="50%"
        width={'100%'}
        image={import.meta.env.VITE_BASE_URL+img}     />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc.split(' ').slice(0,6).join(' ')}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>navigate(`/product-details/${id}/${name.replaceAll(' ','-')}`)} size="small" >Learn More</Button>
      </CardActions>
    </Card>
  );
}