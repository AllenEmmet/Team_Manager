import React, { useEffect, useState } from 'react'
import SubNav1 from './SubNav1'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Table, TableContainer, TableBody, TableHead, TableCell, TableRow} from '@mui/material'
const PlayerList = (props) => {

    const {listPageActive, setListPageActive, setManagePlayerStatusActive} = props
    const [players, setPlayers] = useState([])
    // const navigate = useNavigate()
    useEffect(()=>{
        setListPageActive(true)
        setManagePlayerStatusActive(false)
        axios.get('http://localhost:8000/api/players')
            .then((res)=> {setPlayers(res.data)})
            .catch((err)=>{console.log(err)})
    })

    const deleteHandler = (id) =>{
        axios.delete(`http://localhost:8000/api/players/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        
    }
  return (
    <div>
        <SubNav1 listPageActive={listPageActive} setListPageActive={setListPageActive}></SubNav1>
        <h1>Here are all the players</h1>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Player Name</TableCell>
                        <TableCell>Preferred Position</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        players.map((player, index)=>(
                            <TableRow key={index}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.preferredPosition}</TableCell>
                                <TableCell><button onClick={()=>deleteHandler(player._id)}>Delete</button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default PlayerList