import jasperImg from '../gems/ruby.jpg'
import {Modal,Button} from 'react-bootstrap'
import React,{useState} from 'react'
import {addRuby} from '../../user-api'
import AuthApi from '../../../utils/AuthApi'

function Ruby(){
    const [show, setShow] = useState(false);
    const [message,setMessage]=useState();
    const [error,setError]=useState(false)
    const errClose=()=>setError(false)
    const errShow=()=>setError(true)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const authApi = React.useContext(AuthApi)


    const handleStack= async ()=>{
        const res= await addRuby(authApi.user.username).catch((err)=>{return {err}})  
        if(res.data.user){
            await authApi.setUser(res.data.user)
        }
        else if(res.data.insufficient){
            setMessage("insufficient balance")
            errShow()
        }else if(res.data.active){
            setMessage("You have an active plan already")
            errShow()
        }
        handleClose()
        console.log(res)
        return res
    }
    return(
        <div className="card text-white bg-secondary mb-3 shadow" style={{maxWidth:"14rem",textAlign:"initial"}} onClick={handleShow}>
                <div className="card-header">
                    <h5 className="lead" style={{float:"left"}}>Ruby</h5>
                    <img src={jasperImg} className=" gem" alt="jasper" s style={{float:"right"}} ></img>
                </div>
                <div className="card-body" >
                    <p className="card-title lead" style={{fontSize:"0.9rem",float:"left"}}> COST <br/> 5,000BTX</p>
                    <p className="card-text lead" style={{fontSize:"0.9rem",float:"right"}}>ROI 90%<br/> (10 Days)</p>
                </div>

                <div onClick={e => e.stopPropagation()}>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                    <Modal.Header style={{textAlign:"center"}} >
                        <Modal.Title className="lead" >Ruby Stack</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="lead" style={{fontSize:"1rem"}}>Click purchase to acquire Ruby Stack</Modal.Body>
                    <Modal.Footer>
                    <Button variant="dark" onClick={handleStack} block>Purchase</Button>
                    </Modal.Footer>
                </Modal>
                </div>

                <div onClick={e => e.stopPropagation()}>
                <Modal show={error} onHide={errClose} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                    
                        <p className="lead" style={{textAlign:"center",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.5rem"}} >{message}</p>

                </Modal>
                </div>
            </div>
    )
}

export default Ruby