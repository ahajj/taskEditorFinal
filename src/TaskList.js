import './App.css';
import {Alert, Box, Collapse, Container, List, ListItemButton, ListItemText, ListItemIcon, IconButton, TextField, Typography} from "@mui/material";
import { AddTask, Task } from "@mui/icons-material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export default function TaskList() {

  const [errorText, setError] = useState("");
  const [tasks, setTasks] = useState(window.localStorage.getItem('tasks') ? JSON.parse(window.localStorage.getItem('tasks')) : []);
  const [completedTasks, setCompletedTasks] = useState(window.localStorage.getItem('completedTasks') ? JSON.parse(window.localStorage.getItem('completedTasks')) : []);
  const [open, setOpen] = useState(!tasks.length)
  const [inputValue, setInputValue] = useState("");
  const [taskUpdateText, settaskUpdateText] = useState("");


  const handleAddTask = (event) => {
    // prevent page refresh
    event.preventDefault();

    const taskName = event.target.inputField.value;

    // Warn the user if the input is empty
    if (!taskName) {
      setError("Invalid Task!  Please enter a new task and try again");
      return;
    }
    setError("");

    // update flag to hide the empty message
    setOpen(false)

    // clear the input field
    setInputValue("");

    // update completed text
    settaskUpdateText("Created '" + taskName + "'!  Clicking on it will mark it as 'Completed'.")

    const task = {task: taskName, active:true, key: uuidv4()};
    setTasks(oldTasks => [...oldTasks, task]);
    window.localStorage.setItem('tasks', JSON.stringify(tasks.concat([task])));

  }

  const handleTaskClick = (event) => {

    // handle the case where the icon is clicked
    const taskName = (event.target.textContent) ? event.target.textContent : event.target.parentElement.parentElement.parentElement.childNodes[1].textContent;
    const taskId = (event.target.offsetParent) ? event.target.offsetParent.id : event.target.parentElement.parentElement.parentElement.id;

    // filter out the selected task.
    // look into adding a pretty effect here
    setTasks(oldTasks => [...oldTasks.filter(t => t.key !== taskId)])

    // add the selected task to the completed tasks list
    // note, this will update the next render time
    // so update the local storage first
    window.localStorage.setItem('completedTasks', JSON.stringify(completedTasks.concat(taskName)));
    window.localStorage.setItem('tasks', JSON.stringify(tasks.filter(t => t.key !== taskId)));

    setCompletedTasks(oldCompletedTasks => [...oldCompletedTasks, taskName]);

    // update flag to hide the empty message
    setOpen(!tasks.filter(t => t.key !== taskId).length)

    // update completed text
    settaskUpdateText("Completed '" + taskName + "'!  Completed tasks can be viewed in 'Completed Tasks'")

    // prevent page refresh
    event.preventDefault();
  }

  const handleTextFieldInputChange = (event) => {

      const taskName = event.target.value;

      // update the value state
      setInputValue(taskName);

      // remove the completed text message
      settaskUpdateText("");

      // Warn the user if the input is empty
      if (!taskName) {
        setError("Invalid Task!  Please enter a new task and try again");
        //setOpen(true);
        return;
      }

      // ensure the error isn't showing
      setError("");
  }

  return (
    <div>
      <Container maxWidth="xl" className="App-main">
        <p>
        Task List
        </p>
        <Box sx={{ bgcolor: 'white' }} >
          <Typography component="div">
            <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 'h6.fontSize', mt: 4, color: 'black' }}>
              Create a Task
            </Box>
          </Typography>
          <form onSubmit={handleAddTask} >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
              }}
            >
              <TextField
                sx={{ width: '95%' , mb:2, mt:2}}
                name="inputField"
                id="taskList_input"
                label="Enter a new Task!"
                multiline
                rows={3}
                value={inputValue}
                error ={errorText.length === 0 ? false : true }
                helperText={errorText}
                onChange={handleTextFieldInputChange}
              />
              <IconButton
                type="submit"
                aria-label="Add Task"
              >
                <AddTask/>
              </IconButton>
            </Box>
          </form>
          <Typography component="div">
            <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: 'h6.fontSize', m: 1, color: 'black' }}>
              Current Tasks
            </Box>
          </Typography>
          <Collapse in={open}  sx={{mb: 2}}>
            <Alert severity="info"
              sx={{ mb: 2 }}
              >
              No active tasks!  New tasks added above will appear here.
            </Alert>
          </Collapse>
          <Collapse in={taskUpdateText.length > 0}  sx={{mb: 2}}>
            <Alert severity="success"
              sx={{ mb: 2 }}
              >
              {taskUpdateText}
            </Alert>
          </Collapse>
          <List sx={{ width: '95%' , mb:2, mt:2}}>
            {tasks.map((task, index) =>
              <ListItemButton divider  onClick={handleTaskClick}  key={task.key}  id={task.key}>
                <ListItemIcon>
                  <Task/>
                </ListItemIcon>
                <ListItemText primary={task.task} sx={{color: 'black' }} />
              </ListItemButton>         
            )}
          </List>
        </Box>
      </Container>
    </div>
  );
}

