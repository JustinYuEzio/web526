import React, { Component }  from 'react';
// import '../styles/Contact.css';

const Character = (props) => {
    return <div> 
        <img src={props.pic} alt="" style= {{width: "60%", height: "60%"}}/>
        <span style={{fontSize: "17px"}}> {props.des} </span>
    </div>
};

export default Character;
