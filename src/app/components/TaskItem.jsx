'use client';

import { Checkbox, IconButton, ListItem, ListItemText, Stack, Chip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ task, setTasks }) {
    const toggle = (key) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === task.id ? { ...t, [key]: !t[key] } : t))
        );
    };

    const deleteTask = () => toggle('trashed');
    
    return (
        <ListItem
            sx={{
                bgcolor: '#F6FAFD',
                mb: 1,
                borderRadius: 1,
                p: 1,
                // display: 'flex',
                // justifyContent: 'space-around',
                // alignItems: 'center',
                border: '1px solid #e0e0e0',
            }}
        // secondaryAction={
        //     <>
        //         <IconButton edge="end" aria-label="info">
        //             <InfoIcon color="success" />
        //         </IconButton>
        //         <IconButton edge="end" aria-label="star" onClick={() => toggle('starred')}>
        //             <StarBorderIcon />
        //         </IconButton>
        //         <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
        //             <DeleteIcon />
        //         </IconButton>
        //     </>
        // }
        >
            <Checkbox
                checked={task.completed || false}
                onChange={() => toggle('completed')}
                edge="start"
                sx={{ mr: 1 }}
            />
            <ListItemText
                primary={
                    <span style={{ textDecoration: (task.completed || false) ? 'line-through' : 'none' }}>
                        {task.title || 'No Title'}
                    </span>
                }
                secondary={task.description || 'No Description'}
                sx={{ flexGrow: 1, mr: 2 }}
            />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                {(task.labels || []).map((label) => (
                    <Chip
                        key={label}
                        label={label}
                        size="small"
                    // style={{ backgroundColor: labelColors[label] || 'grey', color: '#fff' }}
                    />
                ))}

                <IconButton edge="end" aria-label="info">
                    <InfoIcon color="success" />
                </IconButton>
                <IconButton edge="end" aria-label="star" onClick={() => toggle('starred')}>
                    {/* <StarBorderIcon /> */}
                    {task.starred ? <StarIcon color="warning" /> : <StarBorderIcon />}
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={deleteTask}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </ListItem>
    );
}