import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    friendName: '',
    friendEmail: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3500/referrals', formData);
      setSuccess('Referral submitted successfully!');
      setFormData({
        yourName: '',
        friendName: '',
        friendEmail: ''
      });
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Refer & Earn
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Friend's Name"
            variant="outlined"
            fullWidth
            name="friendName"
            value={formData.friendName}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Friend's Email"
            variant="outlined"
            fullWidth
            name="friendEmail"
            value={formData.friendEmail}
            onChange={handleChange}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ReferralForm;
