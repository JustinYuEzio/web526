import React, { Component }  from 'react';
// import '../styles/Contact.css';

const Person = (props) => {
    return <div> 
        <img src={props.pic} alt="" style={{height: '30%', width: '30%'}}/>
        <h7>my name is {props.name}</h7>
        <h7>my linkedin is {props.linkedin}</h7>
    </div>
};

export default Person;
