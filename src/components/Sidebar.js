// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material'; // Added Typography here
import { FaFileAlt, FaEdit, FaFont, FaPlus, FaEye, FaTools, FaMailBulk, FaQuestionCircle } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

function Sidebar({ open, onClose, onSelect }) {
  const theme = useTheme();

  const menuItems = [
    { text: 'Classroom', icon: <FaFileAlt /> },
    { text: 'Department', icon: <FaEdit /> },
    { text: 'Course', icon: <FaFont /> },
    { text: 'Instructor', icon: <FaPlus /> },
    { text: 'Section', icon: <FaEye /> },
    { text: 'Teaches', icon: <FaTools /> },
    { text: 'Student', icon: <FaMailBulk /> },
    { text: 'Takes', icon: <FaFileAlt /> },
    { text: 'Advisor', icon: <FaEdit /> },
    { text: 'Time Slot', icon: <FaFont /> },
    { text: 'Prereq', icon: <FaPlus /> },
    { text: 'Help', icon: <FaQuestionCircle /> }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          width: 240,
          borderRight: `1px solid ${theme.palette.divider}`,
          padding: 2,
        },
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', padding: 2, color: theme.palette.primary.main }}>
          Sidebar
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => onSelect(item.text)}
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 'medium',
                  color: theme.palette.text.primary,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
