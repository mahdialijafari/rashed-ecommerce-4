import React from 'react';
import { Box, Grid, Typography, IconButton, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: '2rem',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            About Us
          </Typography>
          <Typography variant="body2">
            Welcome to our e-commerce store! We offer the best products at the best prices. 
            Explore our wide range of collections and find what you need!
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Quick Links
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
            Home
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
            Shop
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
            About
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '0.5rem', cursor: 'pointer' }}>
            Contact
          </Typography>
        </Grid>

        {/* Newsletter Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            Stay updated with the latest deals and offers.
          </Typography>
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#f57c00', '&:hover': { backgroundColor: '#e65100' } }}>
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ marginBottom: '1rem' }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: '1px solid #444',
          marginTop: '2rem',
          paddingTop: '1rem',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">© 2024 Your E-Commerce Store. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
