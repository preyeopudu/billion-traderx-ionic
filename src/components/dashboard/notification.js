import './withdraw.css'
import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import AuthApi from '../../utils/AuthApi'


function Notification(){
    const authApi = React.useContext(AuthApi)
    const notifications=authApi.notification.map((notification)=><div className="shadow-lg" style={{marginTop:"10px",textAlign:'initial',padding:"5px"}}>
        <p className="lead" style={{fontSize:"0.8rem"}}>{notification.title}</p>
        <p className="lead" style={{fontSize:"0.8rem"}}>{notification.text}</p>
        <p className="lead" style={{fontSize:"0.7rem"}}>{new Date(notification.date).toDateString()}</p>
        </div>)
    
    return(
        <div className="App" >
            <div className="container-fluid">
            <Link to="/home" className="" style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                {notifications}
            </div>
                


             
        </div>
    )
}

export default Notification