import React from 'react';

export default function User({name, id, dept,email,deleteUser}){

    // const {name, id, dept} =props;
 
    //const {name, id, dept,email} =props.user;
 
     // const name= "shafayet";
     // const id= "12";
     // const dept= "CS";
 
     return(
         <div className='usermain'>
         {/* <h1> Name: {props.name}</h1>
         <p>  ID:  {props.id}</p>
         <p>  Dept:  {props.dept} </p> */}
 
        <h3>Name: {name}</h3>
			<p>
				ID: {id} <br/>
				DEPT: {dept} <br/>
				Email: {email} <br/>
			</p>	
          {/* <button onClick={myname}>Click</button> */}
          <button onClick={()=>deleteUser(id)}>Delete</button>
         </div>  
     )
 };