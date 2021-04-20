import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// const name= "shafayet";
// const id= "12";
// const dept= "CS";
 


const Users=[

{
		id: '1',
		name: 'shafayet',
		dept: 'CS',
		email: 'alamin@aiub.edu'
	},
	{
		id: '2',
		name: 'ABC',
		dept: 'CIS',
		email: 'abc@aiub.edu'
	},
	{
		id: '3',
		name: 'XYZ',
		dept: 'CSE',
		email: 'xyz@aiub.edu'
	}
];

const names =[ 'a' , 'b', 'c' , 'd']



function Userlist(){
    return(
        Users.map((user)=>{
            // return <h1> {name}</h1>

            return <User name={user.name}  id={user.id} dept={user.dept} email={user.email}/>
        })    
    );
}


// function User(){

//     // const name= "shafayet";
//     // const id= "12";
//     // const dept= "CS";

//     return(
//         <div className='usermain'>
//          <h1> Name: {name}</h1>
//          <p>  ID:  {id}</p>
//          <p>  Dept:  {dept} </p>
//         </div>  
//     )
// };



//function User(props){
function User({name, id, dept, email}){

   // const {name, id, dept} =props;

    // const name= "shafayet";
    // const id= "12";
    // const dept= "CS";

    return(
        <div className='usermain'>
        {/* <h1> Name: {props.name}</h1>
        <p>  ID:  {props.id}</p>
        <p>  Dept:  {props.dept} </p> */}

         <h1> Name: {name}</h1>
         <p>  ID:  {id}</p>
         <p>  Dept:  {dept} </p>
         <p>  email:  {email} </p>
        </div>  
    )
};

// ReactDOM.render( <User/>,document.getElementById('root')) /// render  only user

 

ReactDOM.render( <Userlist/>,document.getElementById('root')) // rendeer userlist which has more user