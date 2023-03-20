import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Clients from './Components/Clients/Clients'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import ClientDetails from './Components/Clients/ClientDetails'
import ProjectRequest from './Components/Projects/ProjectRequest';
import Login from './Components/Login/Login'

function App() {


  // const DrawerHeader = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  // }));
  return (
    // <Box sx={{ display: 'flex' }} >
    //   <Header />
    //   <Box component="main" sx={{ flexGrow: 1, p: 3, alignItems: 'center !important' }}>
    //     <DrawerHeader />
    //     <Routes>
    //       <Route path='/' element={<Dashboard />}></Route>
    //       <Route path='/clients' element={<Clients />}></Route>
    //       <Route path='/client/:id' element={<ClientDetails />}></Route>
    //       <Route path='/projectrequest' element={<ProjectRequest />}></Route>
    //     </Routes>
    //   </Box>
    // </Box>
    <Login  />


  );
}

export default App;
