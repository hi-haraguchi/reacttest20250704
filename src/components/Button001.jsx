import React from 'react'
import Button from '@mui/material/Button';

const Button001 = ({ ookisa, iro ,text}) => {
    return (
        <Button variant="contained" color={iro} size={ookisa}>
        {text}
        </Button>
    )
}
export default Button001;