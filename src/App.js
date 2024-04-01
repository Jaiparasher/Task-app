import React from "react";
import { Box, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"; 
import TaskInput from "./components/TaskInput"; 
import TaskList from "./components/TaskList"; 

function App() {

  return (
    <>
      <CssBaseline /> 
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  width="100%">
        <Typography variant="h3" component="h1" sx={{ mb: 2,pt:2 }}  >My To-Do App</Typography>
        <TaskInput />
        <TaskList />
      </Box>
    </>
  );
}

export default App;
