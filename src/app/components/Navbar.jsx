// 'use client';

// import { AppBar, Toolbar, Checkbox, IconButton, Button, Stack, Avatar } from '@mui/material';
// import MailIcon from '@mui/icons-material/Mail';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// export default function Navbar() {
//     return (
//         <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
//             <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#f5f5f5', padding: '8px 16px' }}>
//                 <Stack direction="row" spacing={1} alignItems="center">
//                     <Checkbox size="small" />
//                     <IconButton color="default" size="small">
//                         <MailIcon />
//                     </IconButton>
//                     <IconButton color="default" size="small">
//                         <CalendarTodayIcon />
//                     </IconButton>
//                     <IconButton color="default" size="small">
//                         <StarBorderIcon />
//                     </IconButton>
//                 </Stack>
//                 <Stack direction="row" spacing={2} alignItems="center">
//                     <Button variant="text" startIcon={<img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" />} sx={{ textTransform: 'none', color: '#757575' }}>
//                         English
//                     </Button>
//                     <IconButton color="default" size="small">
//                         <SearchIcon />
//                     </IconButton>
//                     <IconButton color="default" size="small">
//                         <NotificationsIcon />
//                     </IconButton>
//                     <Stack direction="row" spacing={1} alignItems="center">
//                         <Avatar alt="John Doe" src="https://via.placeholder.com/30" />
//                         <span style={{ color: '#757575' }}>John Doe</span>
//                     </Stack>
//                 </Stack>
//             </Toolbar>
//         </AppBar>
//     );
// }

'use client';

import { AppBar, Toolbar, Checkbox, IconButton, Button, Stack, Avatar, Badge, Typography } from '@mui/material';
import { MailOutline, CalendarToday, Star, Search, ShoppingCart, Notifications } from '@mui/icons-material';

export default function Navbar() {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%', margin: '10' }}>
            <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#fff', borderBottom: '1px solid #e0e0e0', padding: '4px 16px' }}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Checkbox size="small" />
                    <IconButton color="default" size="small">
                        <MailOutline />
                    </IconButton>
                    <IconButton color="default" size="small">
                        <CalendarToday />
                    </IconButton>
                    <IconButton color="default" size="small">
                        <Star color="warning" />
                    </IconButton>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Button variant="text" startIcon={<img src="https://flagcdn.com/us.svg" alt="US Flag" width="20" />} sx={{ textTransform: 'none', color: '#757575' }}>
                        English
                    </Button>
                    <IconButton color="default" size="small">
                        <Search />
                    </IconButton>
                    <IconButton color="default" size="small">
                        <ShoppingCart />
                    </IconButton>
                    <Badge badgeContent={5} color="primary">
                        <IconButton color="default" size="small">
                            <Notifications />
                        </IconButton>
                    </Badge>
                    <Stack direction="column"  alignItems="center" sx={{ color: '#757575', p: 1 }}>
                        <Typography>John Doe</Typography>
                        <Typography variant="caption" color="#4caf50">Available</Typography>
                    </Stack>
                    <Avatar alt="John Doe" src="https://via.placeholder.com/40" />
                </Stack>
            </Toolbar>
        </AppBar>
    );
}