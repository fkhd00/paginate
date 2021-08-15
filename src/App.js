import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

function App(){
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);
  const [page]=useState(1);
  const [perPage]=useState(6);
  const [totalUsers,setTotalUsers]=useState(0);
  const [count,setCount]=useState(1);

  useEffect(()=>{
    const fetchdata=async ()=>{
      setLoading(true);
      console.log(count)
      const response=await axios.get("https://reqres.in/api/users?page="+count);
      setTotalUsers(response.data.total);
      setLoading(false);
      setUsers(response.data.data);  
    };
    
    fetchdata();
  },[page,count]);
  const lastIndex=page*perPage;
  const firstIndex=lastIndex-perPage;
  const currentUsers=users.slice(firstIndex,lastIndex);

  const paginate=(count)=>setCount(count);

  return(
    <div className="appContainer">
      <div>
        <h1>Pagination</h1>
        {loading?<p>Loading...</p>:<><Users user={currentUsers} page={page}/></>}
        <div className="buttonContainer">
          <button type="button" onClick={()=>{setCount(count=>count-1)}}>Prev</button>
          <Pagination perPage={perPage} totalUsers={totalUsers} paginate={paginate}/>
          <button onClick={()=>setCount(count=>count+1)}>Next</button>
        </div>    
      </div>
    </div>
  )
}

export default App;
