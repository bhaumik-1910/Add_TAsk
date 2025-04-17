// 'use client';

// import TaskItem from './TaskItem';
// import { List } from '@mui/material';

// export default function TaskList({ tasks, setTasks }) {
//   return (
//     <List>
//       {tasks.map(task => (
//         <TaskItem key={task.id} task={task} setTasks={setTasks} />
//       ))}
//     </List>
//   );
// }

'use client';

import { useState } from 'react';
import { Box, TextField, List } from '@mui/material';
import TaskItem from './TaskItem';

export default function TaskList({ tasks = [], setTasks }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter((task) =>
        (task.title?.toLowerCase().includes(searchQuery.toLowerCase()) || '') ||
        (task.description?.toLowerCase().includes(searchQuery.toLowerCase()) || '')
    );

    return (
        <>
            <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ mb: 2, bgcolor: '#fff', borderRadius: 1, width: 1200 }}
                InputProps={{
                    startAdornment: null,
                }}
            />
            <List>
                {(filteredTasks || []).map((task) => (
                    <TaskItem key={task.id} task={task} setTasks={setTasks} />
                ))}
            </List>
        </>
    );
}