import {Redirect, Route,Switch} from 'react-router-dom'
import SignIn from '../components/Signin'
import SignUp from '../components/signup'
import Default from '../components/default'
import Forgot from '../components/forgot'
import Home from '../components/dashboard/Home'
import Withdraw from '../components/dashboard/withdraw'
import Deposit from '../components/dashboard/deposit'
import Transfer from '../components/dashboard/transfer'
import Transactions from '../components/dashboard/transactions'
import Referral from '../components/dashboard/referral'
import Notification from '../components/dashboard/notification'
import Slide from '../components/slide'

import React from 'react'
import AuthApi from '../utils/AuthApi'

function Routes(){
    return(
        <Switch>
            <Route path="/slide" component={Slide}/>
            <Route path="/referral" component={Referral}/>
            <Route path="/notification" component={Notification}/>
            <Route path="/transfer" component={Transfer}/>
            <Route path="/transactions" component={Transactions}/>
            <Route path="/deposit" component={Deposit}/>
            <Route path="/withdraw" component={Withdraw}/>
            <RouteRegisteration path="/signin" component={SignIn}/>
            <RouteRegisteration path="/signup" component={SignUp}/>
            <Route path="/forgot" component={Forgot}/>
            <RouteProtected path="/home" component={Home}/>
            <Route path="/" component={Default}/>
           
        </Switch>
    )
}


const RouteRegisteration=({component:Component,...rest})=>{
    const authApi=React.useContext(AuthApi);
    return(
        <Route
            {...rest}
            render={props=>
                !authApi.auth ? <Component {...props}/> :<Redirect to="/home"/>
            }
            />
    )
}


const RouteProtected=({component:Component,...rest})=>{
    const authApi=React.useContext(AuthApi);
    return(
        <Route 
            {...rest}
            render={props=>
                authApi.auth ? <Component {...props}/> :<Redirect to="/signin"/>
            }
            />
    )
}


export default Routes