
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Assets from './Assets';
function App() {
  const [user, setUser] = useState("")

  const getUser= async()=>{
    const url ="https://randomuser.me/api/"
    try {

      const {data} = await axios(url)
      // console.log(data.results[0])
      setUser(data.results[0])
      
      
    } catch (error) {
     console.log(error); 
    }
  
  }
  
  
   useEffect(() => {
  getUser()
    }, [])



  return (
    <div className="App">
      <Assets user={user} getUser={getUser}/>
    </div>
  );
}

export default App;
