import './withdraw.css'
import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import AuthApi from '../../utils/AuthApi'


function Transactions(){
    const authApi = React.useContext(AuthApi)
    const transactions=authApi.user.receipt.map((transaction)=><div className="shadow-lg" style={{marginTop:"10px",textAlign:'initial',padding:"5px"}}>
        <p className="lead" style={{fontSize:"1.2rem"}}>{transaction.text}</p>
        <p className="lead" style={{fontSize:"1rem"}}>{new Date(transaction.date).toDateString()}</p>
        </div>)
    
    return(
        <div className="App" >
            <div className="container-fluid">
            <Link to="/home" className="" style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                {transactions}
            </div>
                


             
        </div>
    )
}

export default Transactions