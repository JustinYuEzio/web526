import React from 'react';
import '../../assets/css/logo.css';
import logo from '../../assets/usc_526.png';
const Logo = () => {
  return (
    <div width='32px' height='32' viewBox='0 0 32 32' >
     <img className = "logo" src={logo} alt="" style={{height: '10%', width: '10%'} }/>
      
    </div>
  )
}
export default Logo;
