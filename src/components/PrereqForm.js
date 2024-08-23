import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Alert } from '@mui/material';

function PrereqForm() {
  const [formData, setFormData] = useState({
    courseId: '',
    prereqId: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous messages
    setError('');
    setSuccess('');

    // Validate input fields
    if (!formData.courseId || !formData.prereqId) {
      setError('All fields are required.');
      return;
    }

    // Handle form submission
    console.log(formData);
    setSuccess('Prerequisite added successfully!');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background for consistency with the theme
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#1e1e1e', // Slightly lighter dark background for the form
          color: '#e0e0e0', // Light text color
          boxShadow: '0 4px 8px rgba(0,0,0,0.6)', // Subtle shadow for depth
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#03a9f4' }}>
          Prerequisite Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Course ID"
            name="courseId"
            value={formData.courseId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Prerequisite ID"
            name="prereqId"
            value={formData.prereqId}
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
            sx={{ backgroundColor: '#03a9f4', '&:hover': { backgroundColor: '#0288d1' }, mt: 2 }}
          >
            Submit
          </Button>

          {/* Display error or success messages */}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
        </Box>
      </Paper>
    </Box>
  );
}

export default PrereqForm;
