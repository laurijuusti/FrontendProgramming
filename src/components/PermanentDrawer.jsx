import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lista from './Lista';
import Lomake from './Harjoitustyo-lomake';
import Haku from './Harjoitustyo-haku';
import Settings from './Settings';
import AddIcon from '@mui/icons-material/Add';
import ListItemIcon from '@mui/material/ListItemIcon';
import PreviewIcon from '@mui/icons-material/Preview';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

function PermanentDrawer() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>

            <ListItem component={Link} to="/">
                <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary="Koti" />
            </ListItem>

            <ListItem component={Link} to="/lomake">
                <ListItemIcon><AddIcon/></ListItemIcon>
              <ListItemText primary="Lisää elokuva" />
            </ListItem>

            <ListItem component={Link} to="/lista">
                <ListItemIcon><PreviewIcon/></ListItemIcon>
              <ListItemText primary="Katsomasi elokuvat" />
            </ListItem>

            <ListItem component={Link} to="/haku">
                <ListItemIcon><SearchIcon/></ListItemIcon>
              <ListItemText primary="Haku" />
            </ListItem>
        <Divider/>
            <Box sx={{ position: 'fixed', bottom: 0, width: drawerWidth }}>
                <Divider/>
            <List>
              <ListItem component={Link} to="/settings">
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary="Asetukset" />
              </ListItem>
            </List>
          </Box>
            
          </List>
        </Drawer>


        <Box sx={{ flexGrow: 1, padding: 3 }}>
          <Routes>
            <Route path="/lomake" element={<Lomake />} />
            <Route path="/lista" element={<Lista />} />
            <Route path="/haku" element={<Haku />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default PermanentDrawer;