import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import AuthApi from '../../utils/AuthApi'
import MyChart from './home/chart'
import Stacks from './home/stacks'
import Invest from './home/Invest'
import NavMenu from './home/NavMenu'
import './home.css'
import {getUser} from '../user-api'
import { Link } from 'react-router-dom'

function Home(){
    const [toggle,setToggle]=useState(false)
    const authApi = React.useContext(AuthApi)
    
    const HandleMenu =()=>{
        setToggle((prevState)=>!prevState)
        HandleUser()
    }

    const HandleUser= async ()=>{
        const res =await getUser(authApi.user.username).catch((err)=>{return {err}})  
        authApi.setUser(res.data.user)
    }
    
    let backdrop
    let menuClass
 
    if(!toggle){
        menuClass='side-drawer container-fluid'
        backdrop=<div></div>
    }

    if(toggle){
        menuClass='side-drawer open container-fluid'
        backdrop=<div className="back-drop"  onClick={HandleMenu}  style={{height:"100vh"}}></div>
    }


        
   
    return(
        
        <div className="App" >
            <div className="content">
            
                <nav class="navbar navbar-dark fixed-top" style={{marginTop:"1px"}}>
                    <button class="navbar-toggler" type="button" style={{color:"white"}} onClick={HandleMenu}><span class="navbar-toggler-icon" ></span></button>
                    <Link to="/notification" style={{color:"white"}}><FontAwesomeIcon icon={faBell} style={{fontSize:"25px"}} onClick={HandleUser}/></Link>
                </nav>
            

            <div className="home" style={{zIndex:"0"}}>
                <p className="lead" style={{textAlign:"center",fontSize:"1em",padding:"0",margin:"0"}}>BTX</p>
                <p className="lead" style={{textAlign:"center",fontSize:"1.4rem"}}>{authApi.user.withdrawble+authApi.user.deposit}</p>
            </div>
            <NavMenu className={menuClass} />
            <MyChart/>
            <Stacks/>
            <Invest/>
            {backdrop}
            </div>
            
           
            
            
           
        </div>
    )
}

export default Home