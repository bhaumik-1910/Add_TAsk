'use client';

import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, Button, Modal, Box } from '@mui/material';
import { StarBorder, FlagOutlined, CheckCircleOutline, DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import TaskForm from './TaskForm';

const SidebarContainer = styled(Drawer)(({ theme }) => ({
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        top: 70,
        margin: 10,
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.white,
        border: '2px solid #e0e0e0',
    },
}));

const AddTaskButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1565C0',
    color: '#fff',
    width: '100%',
    margin: theme.spacing(2, 0),
}));

const BulletIcon = styled('span')(({ color }) => ({
    display: 'inline-block',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '8px',
}));

const filters = ['All', 'Starred', 'Important', 'Completed', 'Trashed'];

export default function Sidebar({ setFilter, setTasks }) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <SidebarContainer variant="permanent" anchor="left">
            <List>
                <ListItem>
                    <AddTaskButton variant="contained" onClick={handleOpen}>Add Task</AddTaskButton>
                </ListItem>
                {filters.map((filter) => (
                    <ListItemButton
                        key={filter}
                        selected={selectedFilter === filter}
                        onClick={() => {
                            setSelectedFilter(filter);
                            setFilter(filter);
                        }}
                    >
                        <ListItemText primary={filter} />
                        {filter === 'Starred' && <ListItemIcon><StarBorder /></ListItemIcon>}
                        {filter === 'Important' && <ListItemIcon><FlagOutlined /></ListItemIcon>}
                        {filter === 'Completed' && <ListItemIcon><CheckCircleOutline /></ListItemIcon>}
                        {filter === 'Trashed' && <ListItemIcon><DeleteOutline /></ListItemIcon>}
                    </ListItemButton>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText primary="Labels" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><BulletIcon color="purple" /></ListItemIcon>
                    <ListItemText primary="Frontend" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><BulletIcon color="orange" /></ListItemIcon>
                    <ListItemText primary="Backend" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><BulletIcon color="green" /></ListItemIcon>
                    <ListItemText primary="Doc" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><BulletIcon color="red" /></ListItemIcon>
                    <ListItemText primary="Bug" />
                </ListItem>
            </List>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-task-modal"
                aria-describedby="add-task-form"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <TaskForm setTasks={setTasks} />
                </Box>
            </Modal>
        </SidebarContainer>
    );
}
