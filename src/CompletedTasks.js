import './App.css';
import {Alert, Box, Collapse, Container, Divider, List, ListItemButton, ListItemText, ListItemIcon, Typography} from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import React, { useState } from "react";

export function useTask(taskName) {

}

export default function CompletedTasks() {

  const [completedTasks, setCompletedTasks] = useState(window.localStorage.getItem('completedTasks') ? JSON.parse(window.localStorage.getItem('completedTasks')) : []);
  const [open, setOpen] = useState(!completedTasks.length)

  return (
    <div>
      <Container maxWidth="xl" className="App-main">
        <p>
        Completed Tasks
        </p>
        <Box sx={{ bgcolor: 'background.paper' }} >
          <Typography component="div">
            <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 'h6.fontSize', mt: 4, color: 'black' }}>
              Completed Tasks:
            </Box>
          </Typography>
          <Divider variant="light"/>
          <Collapse in={open}  sx={{mb: 2}}>
            <Alert severity="info"
              sx={{ mb: 2 }}
              >
              No completed tasks!  Complete a task for it to show here.
            </Alert>
          </Collapse>
          <List sx={{ width: '95%' , mb:2, mt:2}}>
            {completedTasks.reverse().map((task, index) =>
              <ListItemButton divider key={index}>
                <ListItemIcon>
                  <TaskAlt/>
                </ListItemIcon>
                <ListItemText primary={task} sx={{color: 'black', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} />
              </ListItemButton>         
            )}
          </List>
        </Box>
      </Container>
    </div>
  );
}

