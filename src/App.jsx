import React from 'react';
import Lista from './components/Lista.jsx';
import Lomake from './components/Harjoitustyo-lomake';
import Haku from './components/Harjoitustyo-haku';
import PermanentDrawer from './components/PermanentDrawer.jsx';
import { blueGrey, grey, blue } from '@mui/material/colors';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Virhesivu from './components/Virhesivu.jsx'
import Koti from './components/Koti.jsx';

const router = createBrowserRouter([

    {path: 'lisää', element: <Lomake/> },
    {path: 'haku', element: <Haku/> },
    {path: 'Lista', element: <Lista/> },
    {path: '/', element: <Virhesivu/>, },

]);

function App() {

  document.body.style.backgroundColor = "white";
  const mainContentPadding = 20;

  return (
        <>
            <RouterProvider router={router} />

            <AppBar position="static">
                <Toolbar sx={{color: blue[100]}}>
                    <Typography variant="h5" component="h1" sx={{ flexGrow: 1, color: grey, paddingLeft: 45}}>
                        Letterboxd:n klooni, kirjoitettu Reactilla MUI:ta ja React Routeria käyttäen
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ display: 'flex', marginTop: 2 }}>
                <PermanentDrawer />
                <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
                </Box>
            </Box>

            <Box sx={{justifyContent: 'space-between', paddingLeft: 30, paddingTop: -3}}>

            </Box>
        </>
    );
};

export default App;