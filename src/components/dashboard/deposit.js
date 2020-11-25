import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {useState} from 'react'

function Deposit(){
    const [link,setLink]=useState("billiontraderx.com.ng")
    const [copy,setCopy]=useState()
    return(
        <div className="App container">

            <Link to="/home" className="rounded " style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
            <h1>Deposit</h1>
            <p className="lead">Copy and open link in browser</p>
            <input type="text" class="form-control" value={link} readonly="readonly"/><br/>
            

            <CopyToClipboard text={link} onCopy={()=>setCopy("Done")}>
                <button type="button" className="btn btn-dark">Copy</button>
            </CopyToClipboard>
            <p className="lead">{copy}</p>
        </div>
    )
}

export default Deposit