// src/components/Welcome.js
import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { FaUniversity } from 'react-icons/fa';

function Welcome() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background for the entire container
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0, // Remove default padding
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: '600px', // Max width for better readability
          padding: 4,
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: '#1e1e1e', // Slightly lighter dark background
          color: '#e0e0e0', // Light text color for contrast
          boxShadow: '0 4px 8px rgba(0,0,0,0.6)', // Subtle shadow
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 3
          }}
        >
          <FaUniversity size={60} color="#03a9f4" style={{ marginBottom: '20px' }} />
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#03a9f4' }}
          >
            Welcome to Walchand's Student Information System
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '20px', color: '#e0e0e0' }}
          >
            Efficiently manage university data and access various features. Choose an option from the sidebar to begin exploring.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#b0b0b0' }}
          >
            Need assistance? Contact support or refer to the documentation for guidance.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Welcome;
