import React from 'react';
import Layout from '../layouts/index';
import gameScene from '../assets/gameScene.png';
import Texty from 'rc-texty';
const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm" style={{marginTop: "-150px"}}>
                <header className="entry-header">
                  <h1 className="entry-title" >Story</h1>
                </header>

                <div className="entry-body">
                  <Texty >
                  The main character(player) can attack and stick to enemies and move with them
                </Texty>
                  
                  <hr />
                  <Texty >
                  Different stickiness (i.e. length of sticking time) on different materials
                  </Texty>
                  <hr />
                  <a href="https://docs.google.com/document/d/1RQV6TejfEK11e6y62U3X38J2acVeeiYPv4rg0pWO0ms/edit#"> Link to GDD</a>
                </div>
              </div>
            </div>
            <div className="entry-media" style={{marginLeft: "0px"}}>
              <img src={gameScene} alt="" />
            </div>
            
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
