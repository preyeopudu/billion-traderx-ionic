import axios from 'axios'



const getUser = async(user)=>{
    const result =await axios.get(`http://localhost:5000/${user}`).catch((err)=>{return {error:true}})
    return result
}



const addEmerald = async(user)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/stack/emerald`).catch((err)=>{return {error:true}})
    return result
}

const addRuby = async(user)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/stack/ruby`).catch((err)=>{return {error:true}})
    return result
}

const addBeryl = async(user)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/stack/beryl`).catch((err)=>{return {error:true}})
    return result
}

const addOnyx = async(user)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/stack/onyx`).catch((err)=>{return {error:true}})
    return result
}

const addSapphire = async(user)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/stack/sapphire`).catch((err)=>{return {error:true}})
    return result
}


const withdraw = async(user,data)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/withdraw`,data).catch((err)=>{return {error:true}})
    return result
}

const transfer = async(user,data)=>{
    const result =await axios.post(`http://54481c050ff8.ngrok.io/${user}/transfer`,data).catch((err)=>{return {error:true}})
    return result
}



export  {getUser,addRuby,addSapphire,addOnyx,addBeryl,addEmerald,withdraw,transfer}