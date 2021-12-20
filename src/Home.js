import './App.css';
import {Box, Button, Stack, Typography} from "@mui/material";
import { AddTask, TaskAlt, Info } from '@mui/icons-material';
import React from "react";
import { Link as RouterLink } from "react-router-dom";


// Home page
// Contains Home Page information
// Which includes links to the Task List, Completed Tasks, and About pages
export default function Home() {


  return (
      <div className="App-main">
        <Box
          sx={{
            p: 2,
            m: 1,
            bgcolor: 'background.paper',
            width: '500',
            height: '500', 
            maxHeight: '90%'
          }}
        >
        <Typography component="div" variant="h4" align="center">
            Welcome to Task Editor!
        </Typography>
        <Typography component="div" variant="p" align="center" sx={{ mb: 10 }}>
            Click 'Home Page' in the header to return here anytime
        </Typography>
        <Stack direction="row" justifyContent="Center" spacing={2}>
          <Button
              key= "Task List"
              color= "inherit"
              variant="outlined"
              to= "/tasks"
              startIcon={<AddTask/>}
              component={RouterLink}
          >
          Task List
          </Button>
          <Button
              key= "Completed Tasks"
              color= "inherit"
              variant="outlined"
              to= "/completed"
              startIcon={<TaskAlt/>}
              component={RouterLink}
          >
          Completed Tasks
          </Button>
          <Button
              key= "About"
              color= "inherit"
              variant="outlined"
              to= "/about"
              startIcon={<Info/>}
              component={RouterLink}
          >
          About
          </Button>
          </Stack>
        </Box>
      </div>
  );
}

