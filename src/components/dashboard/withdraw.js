import './withdraw.css'
import {Link} from 'react-router-dom'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
import {withdraw} from '../user-api'
import AuthApi from '../../utils/AuthApi'


function Withdraw(){
    const [paymentType,setPayment]=useState()
    const [address,setAddress]=useState()
    const [amount,SetAmount]=useState()
    const [message,setMessage]=useState()
    const authApi = React.useContext(AuthApi)

    const handleOnChange =(e)=>{
        if(e.target.name==='paymentType'){
            setPayment(e.target.value)
        }else if(e.target.name==="address"){
            setAddress(e.target.value)
        }
        else if(e.target.name==="amount"){
            SetAmount(e.target.value)
        }
    }

    const handleWithdraw =async (e)=>{
        if(paymentType===undefined||paymentType==="Payment Type"|| address === undefined || amount===undefined){
            setMessage("A field is empty")
        }else if(address.length<=25){
            setMessage("invalid wallet address")
        }
        else if(amount<10000){
            setMessage("Minimum Payout is 10,000")
        }else if(amount>99000){
            setMessage("Maximum Payout is 99,000")
        }
        else{
            setMessage()
            const res = await withdraw(authApi.user.username,{paymentType,address,amount})
            if(res.data.insufficient){
                setMessage("Insufficient Balance")
            }
            else if(!res.data.insufficient){
                setMessage("Sent Successfully")
                authApi.setUser(res.data.user)
            }
            console.log(res)
        }
        

    }
    return(
        <div className="App" >
                <Link to="/home" className="rounded" style={{color:"white"}}><h1 className="back  "><FontAwesomeIcon icon={faChevronLeft} /></h1></Link>
                <p className="lead" style={{fontSize:"1.5rem"}}>Withdraw</p>
                <div className="form-group container">
                <select className="form-control" id="paymenType" name="paymentType" onChange={handleOnChange}>
                    <option>Payment Type</option>
                    <option>Bitcoin</option>
                    <option>Ethereum</option>
                    <option>Tron</option>
                </select>
                </div>

                <div className="form-group container">
                    <input type="text" class="form-control"  placeholder="wallet address" name="address"  onChange={handleOnChange}/>
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

export default Withdraw