import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function User(){
    return(
        <div className='usermain'>
        <Name/>
        <Id/>
        <Dept/>
        </div>
    )
};

const Name = ()=> <h1> Name: Shafayet</h1>;
const  Id = ()=> <h1>  ID:  12</h1>;
const  Dept = ()=> <h1>  Dept:  cse</h1>;
ReactDOM.render( <User/>,document.getElementById('root'))

 