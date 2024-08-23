// src/components/AdvisorForm.js
import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Paper } from '@mui/material';

function AdvisorForm() {
  const [formData, setFormData] = useState({
    sID: '',
    iID: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#121212', // Dark background for consistency with the theme
        padding: 2
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#1e1e1e', // Slightly lighter background for the form
          color: '#e0e0e0', // Light text color
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#03a9f4' }}>
          Advisor Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Student ID"
            name="sID"
            value={formData.sID}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Instructor ID"
            name="iID"
            value={formData.iID}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#03a9f4', '&:hover': { backgroundColor: '#0288d1' } }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default AdvisorForm;
