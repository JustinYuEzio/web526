import React, { Component }  from 'react';
// import '../styles/Contact.css';

const Person = (props) => {
    return <div> 
        <img src={props.pic} alt="" style={{height: '50%', width: '50%'}}/>
        <h6>my name is {props.name}</h6>
        <h6>my linkedin is {props.linkedin}</h6>
    </div>
};

export default Person;
