import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import InputIcon from '@mui/icons-material/Input';


const Bottomnavigation001 = ({ 
label1= "A",
label2= "B",
label3= "C"
    }) => {
    const [value, setValue] = React.useState(0);

return (
    <Box sx={{ width: 500 }}>
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
    >
        <BottomNavigationAction label={label1} icon={<EditNoteIcon />} />
        <BottomNavigationAction label={label2} icon={<CollectionsBookmarkIcon />} />
        <BottomNavigationAction label={label3} icon={<InputIcon />} />
    </BottomNavigation>
    </Box>
    );
};

export default Bottomnavigation001;