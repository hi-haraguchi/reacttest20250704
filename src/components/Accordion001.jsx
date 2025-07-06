import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Accordion001 = ({
accordiontitle1 = "タグ１",
accordiondetail1 = "内容１",
accordiontitle2 = "タグ２",
accordiondetail2 = "内容２",
accordionactiontitle = "タグ３",
accordionactiondetail = "内容３"
}) => {
return (
    <div>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
        >
            <Typography component="span">{accordiontitle1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {accordiondetail1}
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
        >
            <Typography component="span">{accordiontitle2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {accordiondetail2}
        </AccordionDetails>
        </Accordion>
        <Accordion > 
            {/* defaultExpanded */}
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
        >
            <Typography component="span">{accordionactiontitle}</Typography>
        </AccordionSummary>
        <AccordionDetails>
                {accordionactiondetail}
        </AccordionDetails>
        <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
        </AccordionActions>
        </Accordion>
    </div>
    );
}
export default Accordion001