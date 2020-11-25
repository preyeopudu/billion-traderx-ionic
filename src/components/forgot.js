import "./signin.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import {reset} from './auth-api' //axios reset
import React, { useState } from 'react'

function Forgot(){

    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [secret,setSecret]=useState()
    const [message,setMessage]=useState()
    
    const handleOnChange =(e)=>{
        if(e.target.name==='username'){
            setUsername(e.target.value)
        }else if(e.target.name==='password'){
            setPassword(e.target.value)
        }else if(e.target.name==='secret'){
            setSecret(e.target.value)
        }

    }

    const handleReset= async (e)=>{
        e.preventDefault()
        const result= await reset({username,password,secret})
        if(result.data.success){
            setMessage("Reset was successful")
        }
        else{
            setMessage("Failed to reset")
        }
        console.log(result)
         
    }


    return(
        <div className="App">
                <Link to="/signin" style={{color:"white"}}><h1 className="back "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                
 
            <div className="container-fluid wrapper" > 
                <h1 className="lead">Reset Password</h1>
                <form>
                    <input type="email" placeholder="Email" name="username" onChange={handleOnChange}/>
                    <input type="text" placeholder="Secret" name="secret" onChange={handleOnChange}/>
                    <input type="password" placeholder="New Password" name="password" onChange={handleOnChange}/>
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <input type="submit" className="btn btn-light btn-lg btn-block"  value="Reset" onClick={handleReset}/>
                        </div>
                    </div>
                    
                </form>
                <p className="lead" style={{color:"white",fontSize:"1rem"}}>{message}</p>
            </div>
        </div>
    )
}


export default Forgot