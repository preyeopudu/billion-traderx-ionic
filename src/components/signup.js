import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import AuthApi from '../utils/AuthApi'
import { Link } from "react-router-dom"
import "./signup.css"
 import {signup,getNotification} from './auth-api'


function Register(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [name,setName]=useState()
    const [refree,setRefree]=useState()
    const [secret,setSecret]=useState()
    const [message,setMessage]=useState()
    

    const handleOnChange =(e)=>{
        if(e.target.name==='name'){
            setName(e.target.value)
        }else if(e.target.name==='username'){
            setUsername(e.target.value)
        }else if(e.target.name==='password'){
            setPassword(e.target.value)
        }else if(e.target.name==='refree'){
            setRefree(e.target.value)
        }else if(e.target.name==='secret'){
            setSecret(e.target.value)
        }
    }

    const authApi = React.useContext(AuthApi)


    const handleSignup= async (e)=>{
        e.preventDefault()
        const res= await signup({username,password,name,refree,secret})
        const note=await getNotification()
        authApi.setNotification(note.data.notifications)
        if(username===undefined|| password === undefined || name===undefined||secret===undefined){
            setMessage("You left an important field empty")
        }
        else if(res.data.auth){
            await authApi.setUser(res.data.user)
            authApi.setAuth(true)
            
        }else if(res.data.err){
            setMessage("Email is already registered")
        }
         
    }


    return(
        <div className="App">
                <Link to="/" style={{color:"white"}}><h1 className="back "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
            <div className="container-fluid wrapper" >
                <h1 className="lead">Sign Up</h1>
                <form>
                    <input type="text" placeholder="name" onChange={handleOnChange} name="name"/>
                    <input type="email" placeholder="Email (username)" onChange={handleOnChange} name="username"/>
                    <input type="password" placeholder="password" onChange={handleOnChange} name="password"/>
                    <input type="text" placeholder="Referral" onChange={handleOnChange} name="refree"/>
                    <input type="text" placeholder="Favourite Color?" onChange={handleOnChange} required name="secret"/>

                    <div className="container-fluid">
                        <div className="container-fluid">
                            <input type="submit" className="btn btn-light btn-lg btn-block"  value="Create" onClick={handleSignup}/>
                        </div>
                    </div>
                </form>
                <p className="lead" style={{color:"white",fontSize:"1rem"}}>{message}</p>
            </div>
            
        </div>
        
    )
}


export default Register