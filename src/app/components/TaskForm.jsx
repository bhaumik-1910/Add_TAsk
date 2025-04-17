'use client';

import { useState } from 'react';
import { Box, Button, TextField, Stack, Chip } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const labels = ['Frontend', 'Backend', 'Doc', 'Bug'];

export default function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleSubmit = () => {
    if (!title) return;
    setTasks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title,
        description,
        labels: selectedLabels,
        starred: false,
        important: false,
        completed: false,
        trashed: false,
      },
    ]);
    setTitle('');
    setDescription('');
    setSelectedLabels([]);
  };

  const toggleLabel = (label) => {
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <Box mb={3}>
      <Stack direction="row" spacing={2}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} mt={1}>
        {labels.map((label) => (
          <Chip
            key={label}
            label={label}
            clickable
            color={selectedLabels.includes(label) ? 'primary' : 'default'}
            onClick={() => toggleLabel(label)}
          />
        ))}
      </Stack>
    </Box>
  );
}