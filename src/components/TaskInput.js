import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { addTask } from "../redux/tasksSlice";

function TaskInput() {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TextField
        label="Add a new task"
        variant="outlined"
        sx={{ mr: 2 }}
        size="small"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
    </Box>
  );
}

export default TaskInput;
