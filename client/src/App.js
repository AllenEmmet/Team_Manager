
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Router, Route, Navigate} from 'react-router-dom'
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import { AppBar, Paper } from '@mui/material';


function App() {
  const [listPageActive, setListPageActive] = useState(true)
  const [managePlayerStatusActive, setManagePlayerStatusActive] = useState(false)
  return (
    <div>
      
      <BrowserRouter>
      <AppBar position='sticky'>
        <Header managePlayerStatusActive={managePlayerStatusActive} setManagePlayerStatusActive={setManagePlayerStatusActive}/>
      </AppBar>
      <Paper>
        <Routes>
          
          <Route element={<PlayerList listPageActive={listPageActive} setListPageActive={setListPageActive} setManagePlayerStatusActive={setManagePlayerStatusActive}/>} path="/players/list" default ></Route>
          <Route path='/' element={<Navigate to='/players/list'/>}/>
          {/* <Route exact path = '/'>
            <Redirect to='/players/list'></Redirect>
          </Route> */}
          <Route element={<AddPlayer listPageActive={listPageActive} setListPageActive={setListPageActive}/>} path="/players/addplayer"></Route>
          <Route element={<Game managePlayerStatusActive={managePlayerStatusActive} setManagePlayerStatusActive={setManagePlayerStatusActive}/>} path='/status/game/:id'></Route>
        </Routes>
      </Paper>
      </BrowserRouter>
    </div>
  );
}

export default App;
