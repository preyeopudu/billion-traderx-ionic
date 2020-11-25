import './withdraw.css'
import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import AuthApi from '../../utils/AuthApi'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {useState} from 'react'


function Referral(){
    const authApi = React.useContext(AuthApi)
    const [link,setLink]=useState(authApi.user.username)
    const [copy,setCopy]=useState()

    
    return(
        <div className="App" >
            <div className="container-fluid">
           
            <Link to="/home" className="" style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>


                <div className="shadow-lg" style={{marginTop:"80px",textAlign:'centre',padding:"5px"}}>
                    <p lassName="lead" style={{fontSize:"1.2rem",marginTop:"10px"}}>Your referral code</p>
                    <p className="lead" style={{fontSize:"1.6rem"}}>{link}</p>
                    <CopyToClipboard text={link} onCopy={()=>setCopy("Done")}>
                        <button type="button" className="btn btn-dark" style={{marginTop:"20px",marginBottom:"30px"}}>Copy</button>
                    </CopyToClipboard>
                </div>
            </div>
                
           
           

             
        </div>
    )
}

export default Referral