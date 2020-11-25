import {ProgressBar} from "react-bootstrap"
import AuthApi from '../../../utils/AuthApi'
import React from 'react'


function Invest(){
    const authApi = React.useContext(AuthApi)
    
    if(authApi.user.stack.length>0){
        let maturedate=new Date(authApi.user.stack[0].matureDate).getTime()
        let daysLeft=Math.round(Number((maturedate-Date.now()) )/(24*60*60*1000)+1)
        let maxDay
        if(authApi.user.stack[0].name==="Emerald Stack" || authApi.user.stack[0].name==="Ruby Stack"){
            maxDay=10
        }else if(authApi.user.stack[0].name==="Beryl Stack"){
            maxDay=12
        }else if(authApi.user.stack[0].name==="Onyx Stack"){
            maxDay=26

        }
        else if(authApi.user.stack[0].name==="Sapphire Stack"){
            maxDay=28
            
        }
        const percent=maxDay-daysLeft
        
        let matureDate=new Date(authApi.user.stack[0].matureDate).toDateString()
        let startingDate=new Date(authApi.user.stack[0].startingDate).toDateString()
       
        return(
            <div className="container-fluid shadow-lg" style={{textAlign:"initial"}}>
                <div className="container">
            <p className="lead">{authApi.user.stack[0].name}</p>
            <ProgressBar now={percent} max={maxDay} style={{height:"5px"}} />
            <div style={{marginTop:"15px"}}>
                <p className="card-title lead" style={{fontSize:"0.9rem",float:"left"}}>{startingDate} </p>
                <p className="card-text lead" style={{fontSize:"0.9rem",float:"right"}}>{matureDate}</p>
            </div>
            
        </div>
            </div>
        )}
        else{
            return(
                <div>
                    <div className="container shadow-lg" style={{textAlign:"center",}}>
                        <p className="lead" style={{paddingTop:"30px",paddingBottom:"30px",fontWeight:"400"}}>No active investment</p>
                    </div>
                </div>
            )
        }
    
    
}

export default Invest