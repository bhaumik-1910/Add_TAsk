'use client';

import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { loadTasks, saveTasks } from './utils/localStorage';
import Navbar from './components/Navbar';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return !task.trashed;
    if (filter === 'Trashed') return task.trashed;
    return task[filter.toLowerCase()];
  });

  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar setFilter={setFilter} setTasks={setTasks} />
        </Grid>
        <Grid item xs={10}>
          <Box p={3}>
            <TaskList tasks={filteredTasks} setTasks={setTasks} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
