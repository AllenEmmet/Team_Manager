import { AppBar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [MPStyle, setMPStyle] = useState({})
    const[MPStatusStyle, setMPStatusStyle] = useState({})
    const {managePlayerStatusActive, setManagePlayerStatusActive} = props
    const styleBold = {
        fontWeight: 'bold'
    }
    useEffect(()=>{
        if (managePlayerStatusActive){
            setMPStatusStyle(styleBold);
            setMPStyle({})
        }
        else{
            setMPStyle(styleBold)
            setMPStatusStyle({})
        }
    }, [managePlayerStatusActive])
  return (
    // <AppBar>
    <div>
        <span style={{...MPStyle}}>
            <Link to='/players/list' style={{color: 'black',marginLeft: '20px', marginRight: '20px'}}>Manage Players</Link>
        </span>
        <span style={{...MPStatusStyle}}>
            <Link to='/status/game/1' style={{color: 'black'}}>Manage Player Status</Link>
        </span>
    </div>
    // </AppBar>
  )
}

export default Header