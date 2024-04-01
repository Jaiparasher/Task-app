import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: {
    tasks: savedTasks,
  },
});

export default store;
