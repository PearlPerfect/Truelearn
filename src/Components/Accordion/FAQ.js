import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Home.module.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.5rem', fontWeight:'bold', color:'#eab308', background:"#0f172a"}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(6, 15, 15, 0.5)'
      : 'rgb(15, 23, 42)',
      color:`#94a3b8`,
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '3px solid #faf5ff',
  borderBottom:'3px solid #faf5ff',
  background:"#0f172a",
  color:"#eab308",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.Accordion}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography>What does TrueLearn Do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
TrueLearn is an online learning platform for people from different works of life. The websites contains articles videos and blogs for optimal learning.
The videos are broken down to various modules for easy learning and to optimize delivery.
With TrueLearn, you can easily signup choose a course and start learning and reading on modern concepts their application to your field and other fields of studies.
Additionally, TrueLearn offers a comprehensive and easy way to start creating and posting your contents for others to learn from. It is a platform to network while increasing your understanding about both old and new concepts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Who Uses Truelearn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TrueLearn is a platform that covers all works of life. Anyone can use TrueLearn for basic to advance learning.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How Can I contact you incase of questions?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Visit our documentation page, or write us at support@TrueLearn.com. For feedback, partnerships, and general inquiries, fill out the Contact Us Form.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}