import React, { useState, useRef } from 'react';
import { TextField, Button, Box, Typography, Paper, Alert } from '@mui/material';

function ClassroomForm() {
  const [building, setBuilding] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Refs for input fields
  const buildingRef = useRef(null);
  const roomNumberRef = useRef(null);
  const capacityRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'building') setBuilding(value);
    if (name === 'roomNumber') setRoomNumber(value);
    if (name === 'capacity') setCapacity(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous messages
    setError('');
    setSuccess('');

    // Validate input fields
    if (!building || !roomNumber || !capacity) {
      setError('All fields are required.');
      return;
    }

    // Handle form submission
    console.log({ building, roomNumber, capacity });
    setSuccess('Classroom added successfully!');
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background for consistency with the theme
        minHeight: '100vh', // Ensure it covers the full viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
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
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#03a9f4' }}>
          Add Classroom
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            label="Building"
            name="building"
            value={building}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, roomNumberRef)}
            inputRef={buildingRef}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Room Number"
            name="roomNumber"
            value={roomNumber}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, capacityRef)}
            inputRef={roomNumberRef}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{ style: { color: '#e0e0e0' } }}
            InputProps={{ style: { color: '#e0e0e0' } }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Capacity"
            name="capacity"
            value={capacity}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit(e); // Submit form on Enter key in last field
            }}
            inputRef={capacityRef}
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

export default ClassroomForm;
