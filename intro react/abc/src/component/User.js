export default function User({name, id, dept,email}){

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
 
          <h1> Name: {name}</h1>
          <p>  ID:  {id}</p>
          <p>  Dept:  {dept} </p>
          <p>  email:  {email} </p>
          {/* <button onClick={myname}>Click</button> */}
          <button onClick={()=>alert(name)}>Click</button>
         </div>  
     )
 };