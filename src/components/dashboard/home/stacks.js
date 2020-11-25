import './stack.css'
import Ruby from '../stacks/ruby'
import Sapphire from '../stacks/sapphire'
import Emerald from '../stacks/emerald'
import Beryl from '../stacks/beryl'
import Onyx from '../stacks/onyx'

function Stacks(){
    return(
        <div className="container" style={{marginTop:"20px"}}>
        <div className="stacks scrolling-wrapper">
            <Emerald/>
            <Ruby/>
            <Beryl/>
            <Onyx/>
            <Sapphire/>
            </div>
        </div>
  
    )
}

export default Stacks