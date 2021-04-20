import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const name= "shafayet";
const id= "12";
const dept= "CS";

function Userlist(){
    return(
        <div>
            <User name={name} id={id} dept={dept}/>
            <User name={name} id={id} />
            <User name= "xyz"/>


            {/* <User/>
            <User/>
            <User/> */}
        </div> 

        
    )
};


// function User(){

//     // const name= "shafayet";
//     // const id= "12";
//     // const dept= "CS";

//     return(
//         <di