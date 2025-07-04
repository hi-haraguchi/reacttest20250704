import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Textfield001 = ({ label = "Standard"}) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '48ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant="standard" />
    </Box>
  );
};

export default Textfield001;