import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Multiline001 = ({ label = "Multiline" }) => {
    return (
    <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '48ch' } }}
        noValidate
        autoComplete="off"
    >
    <div>
        <TextField
        id="standard-multiline-flexible"
        label={label} 
        multiline
        rows={4} 
        variant="standard" 
        />
    </div>
    </Box>
);
};

export default Multiline001;
