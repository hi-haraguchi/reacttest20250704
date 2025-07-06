import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Snackbar001 = ({
openbutton = "Open Snackbar",
snackbarmessage = "Note archived",
snackbarbutton = "UNDO"

}) => {
const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    setOpen(true);
    };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
    return;
    }

    setOpen(false);
    };

    const action = (
    <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
        {snackbarbutton}
    </Button>
    <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
    >
        <CloseIcon fontSize="small" />
    </IconButton>
    </React.Fragment>
);

return (
    <div>
    <Button onClick={handleClick}>{openbutton}</Button>
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarmessage}
        action={action}
    />
    </div>
);
}

export default Snackbar001