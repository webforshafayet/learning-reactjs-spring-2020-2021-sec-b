import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './userData';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';
import Navbar from './components/Navbar';
 

// const name= "shafayet";
// const id= "12";
// const dept= "CS";
 


// const names =[ 'a' , 'b', 'c' , 'd']


 


function Userlist(){
 
const [ list, setUsers] = useState(users);


//add user 
const addUser= (newUser)=>{
    setUsers([...list, newUser]);
     
}


//delete user
const deleteUser= (id)=>{
    setUsers(list.filter((user)=>user.id !=id));
}

    return(


        <table>
			<thead></thead>
			<tbody>
				<tr>
					<td>
						<Navbar/>
						 <AddUserFrom addUser={addUser}/> 
					 </td>
					<td>
						{
							  list.map((user, index)=>{
								return <User key={index} {...user} deleteUser={deleteUser}/>;
							})
						}
					</td>
				</tr>
			</tbody>
		</table>
        
        
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