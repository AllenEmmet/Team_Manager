
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import {Table, TableContainer, TableBody, TableHead, TableCell, TableRow, AppBar, Toolbar} from '@mui/material'
import { fontWeight } from '@mui/system'
// Modularize game into container, subnav, and game--TODO LIST
const GameOne = (props) => {
    const {managePlayerStatusActive, setManagePlayerStatusActive} = props
    const [players, setPlayers] = useState([])
    const {id:Gid} = useParams()
    
    
    useEffect(()=>{
        setManagePlayerStatusActive(true)
        axios.get('http://localhost:8000/api/players')
            .then((res)=> {setPlayers(res.data)})
            .catch((err)=>{console.log(err)})
    }, [players])
    
    const selectedStyle = {
      color: 'black',
      marginLeft: '20px', 
      marginRight: '20px',
      fontWeight: 'bold',
    }
    const notSelectedStyle = {
      color: 'black',
      marginLeft: '20px', 
      marginRight: '20px'
    }
    const playingHandler = (Pid, status)=>{
      
      let whichGame = {}
      
      if (Gid === '1'){
        whichGame.GameOneStatus = status
        }
      else if (Gid ==='2'){
        whichGame.GameTwoStatus = status
        }
      else{
        whichGame.GameThreeStatus= status
        }
      
      axios.put(`http://localhost:8000/api/players/${Pid}`, 
        whichGame
      )
      .then(res=>console.log(res))
            
        
        
      .catch(err=>console.log(err))
  }
  
 
  return (
    <div>
      {/* Links to each Game */}
      <AppBar position='sticky'>
        <Toolbar>
        <span >
            <Link to='/status/game/1' style={Gid === '1'? {...selectedStyle} : {...notSelectedStyle}}>Game 1</Link>
        </span>
        <span >
            <Link to='/status/game/2' style={Gid === '2'? {...selectedStyle} : {...notSelectedStyle}}>Game 2</Link>
        </span>
        <span >
            <Link to='/status/game/3' style={Gid === '3'? {...selectedStyle} : {...notSelectedStyle}}>Game 3</Link>
        </span>
        </Toolbar>
      </AppBar>
      {/* Title for selected Game */}
      <div>
        <h1>Game {Gid}</h1>
      </div>
      {/* Table containing rows for each player */}
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Player Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Gid === '1'? (
              players.map((player, index)=>(
                <TableRow key={index}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>
                  
                    <button 
                      className={`${player.GameOneStatus === 'Playing'? 'grnbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Playing')}}>
                        Playing
                    </button>
                    <button
                      className={`${player.GameOneStatus === 'Not Playing'? 'redbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Not Playing')}}>
                        Not Playing
                    </button>
                    <button 
                      className={`${player.GameOneStatus === 'Undecided'? 'yelbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Undecided')}}>
                        Undecided
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ): <></>}
            {Gid === '2'? (
              players.map((player, index)=>(
                <TableRow key={index}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>
                  
                    <button 
                      className={`${player.GameTwoStatus === 'Playing'? 'grnbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Playing')}}>
                        Playing
                    </button>
                    <button
                      className={`${player.GameTwoStatus === 'Not Playing'? 'redbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Not Playing')}}>
                        Not Playing
                    </button>
                    <button 
                      className={`${player.GameTwoStatus === 'Undecided'? 'yelbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Undecided')}}>
                        Undecided
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ): <></>}
            {Gid === '3'? (
              players.map((player, index)=>(
                <TableRow key={index}>
                  <TableCell>{player.name}</TableCell>
                  <TableCell>
                  
                    <button 
                      className={`${player.GameThreeStatus === 'Playing'? 'grnbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Playing')}}>
                        Playing
                    </button>
                    <button
                      className={`${player.GameThreeStatus === 'Not Playing'? 'redbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Not Playing')}}>
                        Not Playing
                    </button>
                    <button 
                      className={`${player.GameThreeStatus === 'Undecided'? 'yelbtn': ""}`}
                      onClick={()=>{playingHandler(player._id, 'Undecided')}}>
                        Undecided
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ): <></>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default GameOne