import React from 'react';
import bgm from '../assets/menu_background.mp3';
import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

const Layout = (props) => {
  return (
    <div className="body-wrap boxed-container">
      <Header />
      
      <Main>
        {props.children}
      </Main>
      <audio loop controls style={{color:'black'}}>
        <source src={bgm} type="audio/mpeg"/>
      </audio>
      <Footer />
    </div>
  )
}

export default Layout;
