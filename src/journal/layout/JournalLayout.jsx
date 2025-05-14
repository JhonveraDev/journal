import { Toolbar, Box } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

export const JournalLayout = ({ children, drawerWidth = 240 }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>

    </Box>
  );
};
