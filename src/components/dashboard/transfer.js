import './withdraw.css'
import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import {transfer} from '../user-api'
import AuthApi from '../../utils/AuthApi'


function Transfer(){
    const [user,setUser]=useState()
    const [amount,SetAmount]=useState()
    const [message,setMessage]=useState()
    const authApi = React.useContext(AuthApi)

    const handleOnChange =(e)=>{
        if(e.target.name==='user'){
            setUser(e.target.value)
        }
        else if(e.target.name==="amount"){
            SetAmount(e.target.value)
        }
    }

    const handleWithdraw =async (e)=>{
        if(user === undefined || amount===undefined){
            setMessage("A field is empty")
        }
        else if(amount<500){
            setMessage("Minimum Payout is 500")
        }
        else{
            setMessage()
            const res = await transfer(authApi.user.username,{user,amount})
            if(res.data.userFalse){
                setMessage("User does not exist")
            }
            else if(res.data.success){
                setMessage("Sent Successfully")
                authApi.setUser(res.data.user)
            }else if(!res.data.success){
                setMessage("Insufficient balance")
            }
            console.log(res)
        }
        

    }
    return(
        <div className="App" >
                <Link to="/home" className="rounded" style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                <p className="lead" style={{fontSize:"1.5rem"}}>Transfer</p>
                <div className="form-group container">
               
                </div>

                <div className="form-group container">
                    <input type="text" class="form-control"  placeholder="Email address" name="user"  onChange={handleOnChange}/>
                </div>

                <div className="form-group container">
                <input type="number" class="form-control"  placeholder="Amount in BTX" name="amount"  onChange={handleOnChange}/>
                </div>

                <div className="container">
                    <button className="btn btn-dark btn-block" onClick={handleWithdraw}>Submit</button>
                </div>
                <p className="lead" style={{marginTop:"20px"}}>{message}</p>
             
        </div>
    )
}

export default Transfer