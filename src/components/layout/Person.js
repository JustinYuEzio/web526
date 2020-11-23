import React, { Component }  from 'react';
// import '../styles/Contact.css';

const Person = (props) => {
    return <div> 
        <img src={props.pic} alt="" style={{height: '100%', width: '100%'}}/>
        <a href = {props.linkedin} > {props.name} </a>
    </div>
};

export default Person;
