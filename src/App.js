// src/App.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import Sidebar from './components/Sidebar';
import ClassroomForm from './components/ClassroomForm';
import DepartmentForm from './components/DepartmentForm';
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm';
import SectionForm from './components/SectionForm';
import TeachesForm from './components/TeachesForm';
import StudentForm from './components/StudentForm';
import TakesForm from './components/TakesForm';
import AdvisorForm from './components/AdvisorForm';
import TimeSlotForm from './components/TimeSlotForm';
import PrereqForm from './components/PrereqForm';
import Welcome from './components/Welcome';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const handleSelectForm = (formName) => {
    setSelectedForm(formName);
    handleDrawerClose();
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'Classroom':
        return <ClassroomForm />;
      case 'Department':
        return <DepartmentForm />;
      case 'Course':
        return <CourseForm />;
      case 'Instructor':
        return <InstructorForm />;
      case 'Section':
        return <SectionForm />;
      case 'Teaches':
        return <TeachesForm />;
      case 'Student':
        return <StudentForm />;
      case 'Takes':
        return <TakesForm />;
      case 'Advisor':
        return <AdvisorForm />;
      case 'Time Slot':
        return <TimeSlotForm />;
      case 'Prereq':
        return <PrereqForm />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Button
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <FaBars />
          </Button>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Student Information System
          </Typography>
        </Toolbar>
      </AppBar>

      <Sidebar open={drawerOpen} onClose={handleDrawerClose} onSelect={handleSelectForm} />

      <main>
        {renderForm()}
      </main>
    </div>
  );
}

export default App;
