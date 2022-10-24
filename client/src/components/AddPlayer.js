import React, { useEffect, useState } from 'react'
import SubNav1 from './SubNav1'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const AddPlayer = (props) => {
    const {listPageActive, setListPageActive} = props
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    useEffect(()=>{
        setListPageActive(false)
        
    })
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/players', {
            name: name,
            preferredPosition: position
    })
        .then(
            (res)=>{console.log(res);
            console.log('worked');
            navigate('/players/list')
    })
        .catch((err)=>{
            const errorResponse = err.response.data.errors;
            const errorArray = [];
            for (const key of Object.keys(errorResponse)) {
                errorArray.push(errorResponse[key].message)
           }
           setErrors(errorArray)
           console.log(errorResponse.name.message)
        })
    }
  return (
    <div>
        <SubNav1 listPageActive={listPageActive} setListPageActive={setListPageActive}></SubNav1>
        <form onSubmit={submitHandler}>
            <h1>Add Player</h1>
            {
                errors.map((err, index)=>
                    <p key={index}>{err}</p>
                )
            }
            <div>
                <label htmlFor='name'>Name:</label>
                <input name='name' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
            </div>
            <div>
                <label htmlFor='position'>Preferred Position:</label>
                <input name='position' type='text' onChange={(e)=>{setPosition(e.target.value)}}></input>
            </div>
            <button type='submit'>Add Player</button>
        </form>
    </div>
  )
}

export default AddPlayer