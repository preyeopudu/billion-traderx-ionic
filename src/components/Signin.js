import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "./signin.css"
import AuthApi from '../utils/AuthApi'
import {signin,getNotification} from './auth-api'
import React, { useState } from 'react'


function Login(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [message,setMessage]=useState()

    const handleOnChange =(e)=>{
        if(e.target.name==='username'){
            setUsername(e.target.value)
        }else{
            setPassword(e.target.value)
        }
    }

    const authApi = React.useContext(AuthApi)
    const handleSignIn = async (e)=>{
                e.preventDefault()
                const note=await getNotification()
                authApi.setNotification(note.data.notifications)
                const res = await signin({username,password})
                console.log(res)
                if(res.data){
                    await authApi.setUser(res.data.user)
                    authApi.setAuth(true)
                    
                }
                else{
                    setMessage("Error!! try again")
                }
            }
    return(
        <div className="App">
                <Link to="/" style={{color:"white"}}><h1 className="back "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                
 
            <div className="container-fluid wrapper" > 
                <h1 className="lead">Sign In</h1>
                <form>
                    <input type="email" placeholder="Email" name="username" onChange={handleOnChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleOnChange}/>
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <input type="submit" className="btn btn-light btn-lg btn-block" onClick={handleSignIn}  value="LogIn"/>
                        </div>
                    </div>
                    <p className="lead" style={{color:"white",fontSize:"1rem"}}>{message}</p>
                    <Link className="lead" to="/forgot" style={{color:"white"}}>Forgot Password?</Link>
                </form>
            </div>
        </div>
        
    )
}


export default Login