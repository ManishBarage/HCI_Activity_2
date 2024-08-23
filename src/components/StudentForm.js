import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function StudentForm() {
  const [formData, setFormData] = useState({
    ID: '',
    name: '',
    deptName: '',
    totCred: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
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
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#03a9f4' }}
        >
          Student Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="ID"
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
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Department Name"
            name="deptName"
            value={formData.deptName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Total Credits"
            name="totCred"
            type="number"
            value={formData.totCred}
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

export default StudentForm;
