import React from 'react';
import { TextField, Box, Button, Typography, Paper } from '@mui/material';

function CourseForm() {
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
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#03a9f4' }}>
          Course Form
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Course ID"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Department Name"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Credits"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ backgroundColor: '#03a9f4', '&:hover': { backgroundColor: '#0288d1' }, mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default CourseForm;
