import AuthApi from '../../../utils/AuthApi'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt,faMoneyBillWaveAlt,faCoins,faExchangeAlt,faHistory,faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {logout} from '../../auth-api'
import {Link} from 'react-router-dom'
import './navmenu.css'

function NavMenu(props){
    const authApi = React.useContext(AuthApi)
    const handleSignOUt=async()=>{
        authApi.setAuth(false)
        await logout()
        
    }
    
    return(
        <div className={props.className} style={{height:"100vh"}}>
            <p className="lead" style={{textAlign:"center",fontSize:"2rem"}}>{authApi.user.name}</p>
            <div className="nav-links">

            <p className="lead"><Link to="/transfer" style={{color:"white"}}><FontAwesomeIcon className="icon" icon={faExchangeAlt} />Transfer</Link></p>
            <p className="lead"><Link to="/referral" style={{color:"white"}}><FontAwesomeIcon className="icon" icon={faUserPlus} />Referral</Link></p>
            <p className="lead"><Link to="/deposit" style={{color:"white"}}><FontAwesomeIcon className="icon" icon={faCoins} />Deposit</Link></p>
            <p className="lead"><Link to="/withdraw" style={{color:"white"}}><FontAwesomeIcon className="icon" icon={faMoneyBillWaveAlt} />Withdraw</Link></p>
            <p className="lead"><Link to="/transactions" style={{color:"white"}}><FontAwesomeIcon className="icon" icon={faHistory} />Transactions</Link></p>
            <p className="lead" onClick={handleSignOUt}><FontAwesomeIcon className="icon" icon={faSignOutAlt} /> Log Out </p>
            </div>
        </div>
    )
}

export default NavMenu