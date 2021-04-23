import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {users} from './userData';
import User from './components/User';
import AddUserFrom from './components/AddUserForm';
 

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

    return(


        <table>
			<thead></thead>
			<tbody>
				<tr>
					<td> <AddUserFrom addUser={addUser}/>  </td>
					<td>
						{
							  list.map((user, index)=>{
								return <User key={index} {...user}/>;
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