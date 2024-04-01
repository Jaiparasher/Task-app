import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload);
        saveTasksToLocalStorage(state);
      },
    removeTask: (state, action) => {
        const taskIdToRemove = action.payload;
        const updatedTasks = state.filter((task) => task.id !== taskIdToRemove);
        saveTasksToLocalStorage(updatedTasks);
        return updatedTasks;
      },
  },
});
const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
