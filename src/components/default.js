import logo from '../bitcore.svg'
import './default.css'
import {Link} from 'react-router-dom'

function Default(){
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="lead" style={{fontSize:"2.2rem"}}>Billion Traderx</h1>
                    <div  className="btn-group ">
                        <Link to="/signin" className="btn btn-lg btn-dark">Login</Link>
                        <Link to="/signup" className="btn btn-lg btn-dark">Register</Link>
                    </div>
                  <Link to="/slide" style={{color:"white"}}><p className="lead">What's Billion Traderx?</p></Link>  
            </header>
      
    </div>
    )
}

export default Default