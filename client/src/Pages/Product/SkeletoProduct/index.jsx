import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Skeleton from '@mui/material/Skeleton';

export default function SkeletonProduct() {
  return (
    <Card sx={{ width: '100%', height: '420px' }}>
      {/* Skeleton for CardMedia */}
      <CardMedia>
        <Skeleton variant="rectangular" width="100%" height="50%" />
      </CardMedia>

      <CardContent>
        {/* Skeleton for title */}
        <Skeleton variant="text" width="60%" height={32} />

        {/* Skeleton for description */}
        <Skeleton variant="text" width="80%" height={24} />
        <Skeleton variant="text" width="50%" height={24} />

        {/* Skeleton for price */}
        <Skeleton variant="text" width="30%" height={24} />
      </CardContent>

      <CardActions>
        {/* Skeleton for button */}
        <Skeleton variant="rectangular" width={120} height={36} />
      </CardActions>
    </Card>
  );
}
