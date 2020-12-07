import React from 'react';
// import '../styles/Contact.css';

const Character = (props) => {
    return <div> 
        <img src={props.pic} alt="" style= {{width: "50%", height: "50%", borderRadius: "55%"}}/>
        <span style={{fontSize: "17px"}}> {props.des} </span>
    </div>
};

export default Character;
