import { AppBar, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'
import{ red } from '@mui/material/colors'
import {black} from '@mui/material/colors'
const SubNav1 = (props) => {
    const {listPageActive, setListPageActive} = props
    const [listTabStyle, setListTabStyle] = useState({})
    const[addPlayerTabStyle, setAddPlayerTabStyle] = useState({})
    const styleBold = {
        color: 'black',
        fontWeight: 'bold',
        
        marginRight: '20px'
    }
    const styleReg = {
        
        marginRight: '20px',
        color: 'black'
        
    }
    useEffect(()=>{
        if (listPageActive){
            setListTabStyle(styleBold);
            setAddPlayerTabStyle(styleReg)
            
        }
        else{
            setAddPlayerTabStyle(styleBold)
            setListTabStyle(styleReg)
        }
    }, [listPageActive])
  return (

    <div>
        <AppBar position='sticky' style={styleReg}>
            <Toolbar>
                <p>
                    <Link to='/players/list' style={{...listTabStyle}}>List</Link>
                </p>
                <p>
                    <Link to='/players/addplayer' style={{...addPlayerTabStyle}}>Add</Link>
                </p>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default SubNav1