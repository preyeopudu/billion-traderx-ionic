import {Carousel} from 'react-bootstrap'
import bitcore from './slides/bitcore.png'
import money from './slides/money.jpg'
import trading from './slides/trading.jpeg'
import './slide.css'

function Slide(){
    return(
        <div className="App">
<Carousel controls={false} interval={100000}>
  <Carousel.Item style={{background:"#890742",minHeight:"100vh"}}>
        <p className="lead" style={{fontSize:"2rem",marginTop:"80px"}}>Welcome! to</p>
        <p className="lead" style={{fontSize:"2rem",marginTop:"-20px"}}>Billion Traderx</p>
        <img src={bitcore} className="App-logo" alt="logo" height="100"/>
        <p className="lead" style={{fontSize:"1.5rem"}}> We are all about</p>
        <p className="lead" style={{fontSize:"2rem"}}> Crypto Trading</p>
  </Carousel.Item>
  <Carousel.Item style={{background:"",minHeight:"100vh"}}>   
        <p className="lead" style={{fontSize:"2rem",marginTop:"100px"}}>Choose a stack today</p>
        <p className="lead" style={{fontSize:"2rem",marginTop:"-20px"}}>Earn bext ROI</p>
        <img src={money} className="App-logo" alt="logo" style={{height:"1",marginTop:"20px"}}/>
        <p className="lead" style={{fontSize:"2rem"}}> Invest & make </p>
        <p className="lead" style={{fontSize:"2rem",marginTop:"-15px"}}> Profit</p>
  </Carousel.Item>
  <Carousel.Item className="trading" style={{minHeight:"100vh"}}>

        <p className="lead" style={{fontSize:"2rem",marginTop:"50%"}}> With</p>
        <p className="lead" style={{fontSize:"2rem"}}> Bitcore (BTX)</p>
        <p className="lead" style={{fontSize:"1.5rem"}}> you are just a click away</p>
        <p className="lead" style={{fontSize:"1.2rem" ,marginTop:"-10px"}}>to</p>
        <p className="lead" style={{fontSize:"1.5rem",marginTop:"-10px"}}> financial freedom </p>
        
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Slide