import React from "react";

const Users=({user,page})=>{
    return(     
            <div className="listContainer">
                {user.map(item=>{
                   return(
                    <div className="profileContainer" key={item.id}>
                        <div className="imageContainer">
                            <img src={item.avatar} alt=""></img>
                        </div>
                        <div className="infoContainer">
                            <p><b>Name:</b>  {item.first_name} {item.last_name}</p>
                            <p><b>Email: </b>  {item.email} </p>
                        </div>
                    </div>
                   );
                })}
            </div>    
    )
}
export default Users;