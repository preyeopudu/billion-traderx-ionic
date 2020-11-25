import './App.css';
import './bootstrap.min.css'
import Routes from './routes/Routes'
import {
  HashRouter as Router
} from 'react-router-dom'
import AuthApi from './utils/AuthApi'
import {useState} from 'react'

function App() {
  const [auth,setAuth]=useState(false)
  const [user,setUser]=useState()
  const [notification,setNotification]=useState()
  return (
    <div>
    <AuthApi.Provider value={{auth,setAuth,user,setUser,notification,setNotification}}>
        <Router>
          <Routes/>
        </Router>
    </AuthApi.Provider>
    </div>
  );
}

export default App;
