import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Make_Video from '../../Images/Make video.jpg'
import Curriculum from '../../Images/Curriculum.jpg';
import Upload from '../../Images/upload.jpg'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography sx={{display:"flex",justifyContent:"space-between",alignItems:"center", color: "#FFFFF", margin:"1rem auto"}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Map Out Your Curriculum" {...a11yProps(0)}  sx={{color:"#eab308", fontSize:"1.2rem"}}/>
          <Tab label="Make Video/ Write About It" {...a11yProps(1)} sx={{color:"#eab308", fontSize:"1.2rem"}} />
          <Tab label="Post Your Course" {...a11yProps(2)} sx={{color:"#eab308", fontSize:"1.2rem"}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Typography sx={{flex: "0 0 40%", maxWidth:"40%", fontSize:"20px"}}>
    Start with a field that you are passionate about and knowledgeable In. Then choose any topic that is in demand.The way that you teach — what you bring to it — is up to you.
 Our instructors dashboard and curriculum pages will help tailor your work and keep you organized.</Typography>
        <Image src={Curriculum} alt='Make_video' sx={{flex: "0 0 40%", maxWidth:"40%"}}/>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Typography sx={{flex: "0 0 40%", maxWidth:"40%",fontSize:"20px"}}>
    Use basic tools like a digital single-lens reflex (DSLR) camera or your smartphone with a good microphone and you can start already.
You can just Video your screen if you are camera shy. Our write an article on the topic you want to teach about, We recommend 2mins reading for each article and atleast 1hour of video. 
Test your videos to be show the quality is okay and your article will be publish as part of our blog posts.</Typography>
      <Image src={Make_Video} alt='Make_video'/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Typography sx={{flex: "0 0 40%", maxWidth:"40%", fontSize:"20px"}}> Promote your course through social media and your professional networks.
Your course will be discoverable in our website where you can also earn valuable connection on each enrollment.
Your articles too will be posted on our blog page where anyone including the none students can read, rate and comment. </Typography>

<Image src={Upload} alt='Make_video'/>
      </CustomTabPanel>
    </Box>
  );
}

