import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, ListItemText, Button, Box } from "@mui/material";
import { removeTask } from "../redux/tasksSlice"; 

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={2}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#F6F5F5", borderRadius:1 ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{  bgcolor: "#E9E4E6", borderRadius: 1, mb: 1, mt:1, width: "90%" }} >
            <ListItemText primary={task.text} />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleRemoveTask(task.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TaskList;
