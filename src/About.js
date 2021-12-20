import './App.css';
import {Box, Container, Divider, Typography} from "@mui/material";
import React from "react";


export default function About() {

  return (
    <div>
      <Container maxWidth="xl" className="App-main">
        <p>
        About
        </p>
        <Box sx={{ bgcolor: 'background.paper' }} >
          <Typography component="div" align="center">
            <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 'h6.fontSize', mt: 4, color: 'black' }}>
              About Task Editor (Andrew Hajj)
            </Box>
          </Typography>
          <Divider variant="light"/>
          <Typography variant="h4" gutterBottom  sx={{m:2}}>
	        Purpose
	      </Typography>
	      <Typography variant="body1" gutterBottom  sx={{whiteSpace: 'pre-line', px:3}}>
		    - Task List: Enter in new tasks, as well as view and complete current tasks. {"\n"}
		    - Completed Tasks: View completed tasks.  Newly completed tasks are shown at the top. {"\n"}
	      </Typography>
          <Divider variant="light"/>
  	      <Typography variant="h4" gutterBottom  sx={{m:2}}>
	        Libraries Used
	      </Typography>
	      <Typography variant="body1" gutterBottom  sx={{whiteSpace: 'pre-line', px:3}}>
		    - libraries included in the bootstrapped project from 'Create React App' (https://github.com/facebook/create-react-app)  {"\n"}
		    - @mui/material, @emotion/react, @emotion/styled (for UI Components)  {"\n"}
		    --- https://www.npmjs.com/package/@mui/material  {"\n"}
		    - @mui/icon-material (for Icons used) {"\n"}
		    --- https://www.npmjs.com/package/@mui/icons-material {"\n"}
		    - react-router-dom (for the Router) {"\n"}
		    --- https://www.npmjs.com/package/react-router-dom  {"\n"}
	      </Typography>
          <Divider variant="light"/>
  	      <Typography variant="h4" gutterBottom  sx={{m:2}}>
	        General Approach
	      </Typography>
	      <Typography variant="body1" gutterBottom  sx={{whiteSpace: 'pre-line', px:3}}>
		    1. Create the skeleton {"\n"}
		    2. Setup basic functionality {"\n"}
		    3. Make it look nicer {"\n"}
	      </Typography>
	      <Divider variant="light"/>
  	      <Typography variant="h4" gutterBottom  sx={{m:2}}>
	        Steps Taken
	      </Typography>
	      <Typography variant="body1" gutterBottom  sx={{whiteSpace: 'pre-line', px:3}}>
		    1. Bootstrap project with 'Create React App' (https://github.com/facebook/create-react-app). {"\n"}
		    2. Added new functional components for Task List, Completed Tasks and About views {"\n"}
		    3. Setup Router to route between the above {"\n"}
		    4. Worked on the header bar and made sure it could go back home {"\n"}
		    5. Focused on Task List and being able to add new Tasks {"\n"}
		    6. Worked on Completed Tasks next to show completed Tasks {"\n"}
		    7. Revisited Task List and loaded in mui components vs material-ui {"\n"}
	      </Typography>
	      <Divider variant="light"/>
  	      <Typography variant="h4" gutterBottom  sx={{m:2}}>
	        Potential Post-Assignment Work
	      </Typography>
	      <Typography variant="body1" gutterBottom  sx={{whiteSpace: 'pre-line', px:3}}>
		    1. Add unit tests as needed {"\n"}
		    2. Add navigation panel to header (and make it responsive) {"\n"}
		    3. I would rather have a server and database spun up with api to add and remove tasks.  Using window local storage was a way to get this up and running quickly {"\n"}
		    4. More work to enhance the user experience in general  {"\n"}
	      </Typography>
        </Box>
      </Container>
    </div>
  );
}

