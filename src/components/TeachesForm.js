import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Paper } from '@mui/material';

function TeachesForm() {
  const [formData, setFormData] = useState({
    ID: '',
    courseId: '',
    secId: '',
    semester: '',
    year: ''
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
          borderRadius: 3,
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#1e1e1e', // Slightly lighter dark background for the form
          color: '#e0e0e0', // Light text color
          boxShadow: '0 4px 8px rgba(0,0,0,0.6)', // Subtle shadow for depth
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#03a9f4' }}
        >
          Teaches Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Instructor ID"
            name="ID"
            value={formData.ID}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
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
            label="Section ID"
            name="secId"
            value={formData.secId}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Year"
            name="year"
            value={formData.year}
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
        </form>
      </Paper>
    </Box>
  );
}

export default TeachesForm;
