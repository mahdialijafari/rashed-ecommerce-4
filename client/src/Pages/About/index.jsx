// Responsive About Page for E-commerce Website

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 1200, margin: 'auto', mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="/about.jpg" // Replace with actual image path
            alt="About Us"
            sx={{ borderRadius: 2, height: { xs: 300, md: 400 } }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Welcome to our e-commerce platform, where we bring you a curated selection of the finest products. Our mission is to provide high-quality items at competitive prices, ensuring an exceptional shopping experience for every customer.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Founded with the vision of making shopping seamless and enjoyable, we pride ourselves on excellent customer service, fast shipping, and a user-friendly interface. Our catalog spans various categories, ensuring there’s something for everyone.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Thank you for choosing us as your trusted shopping destination. We look forward to serving you!
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => console.log('Learn More button clicked')}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
