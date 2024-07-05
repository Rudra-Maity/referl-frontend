import React from 'react';
import ReferralForm from './ReferralForm';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Box textAlign="center" py={5}>
        <Typography variant="h2" gutterBottom>
          Refer & Earn Program
        </Typography>
      </Box>
      <ReferralForm />
    </Container>
  );
};

export default App;
