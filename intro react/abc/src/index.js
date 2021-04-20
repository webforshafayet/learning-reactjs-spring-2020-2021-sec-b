import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './users';
import User from './component/User';
 

// const name= "shafayet";
// const id= "12";
// const dept= "CS";
 


// const names =[ 'a' , 'b', 'c' , 'd']



function Userlist(){
    return(
       <div>
        {
        users.map((user,index)=>{
         //names.map((name,index)=>{
            // return <h1> {name}</h1>
            // console.log(index);
            // return <User key={index} name={user.name}  id={user.id} dept={user.dept} email={user.email}/>

            return <User key={index}  {...user}/>
        }) 
    }
        </div>
    );
}

// const myname = ()=>{
//      alert('test')
// }


 


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
 

// ReactDOM.render( <User/>,document.getElementById('root')) /// render  only user

 

ReactDOM.render( <Userlist/>,document.getElementById('root')) // rendeer userlist which has more user