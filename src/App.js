import React from 'react';
import StudentList from './components/StudentList';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Student Management System
      </Typography>
      <StudentList />
    </Container>
  );
}

export default App;
