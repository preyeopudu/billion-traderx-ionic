import axios from 'axios'

const signin= async (user)=>{
    const result =await axios.post("http://54481c050ff8.ngrok.io/auth/signin",user).catch((err)=>{return {error:true}})
    return result
}

const signup= async (user)=>{
    const result =await axios.post("http://54481c050ff8.ngrok.io/auth/signup",user).catch((err)=>{return {error:true}})
    console.log(user)
    return result
}

const reset =async (user)=>{
    const result = await axios.post("http://54481c050ff8.ngrok.io/auth/reset",user).catch((err)=>{return {error:true}})
    return result
}


const logout =async (user)=>{
    const result = await axios.post("http://54481c050ff8.ngrok.io/auth/logout",user).catch((err)=>{return {error:true}})
    return result
}

const getNotification =async()=>{
    const result=await axios.get("http://54481c050ff8.ngrok.io/notifications").catch((err)=>{return {error:true}})
    console.log(result)
    return result
    
}


export {signin,signup,reset,logout,getNotification}
