import React from 'react';
import Layout from '../layouts/index';
import NestedGrid from '../components/layout/GridRow';
import Texty from 'rc-texty';
const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <Texty className="entry-title" style={{color: "grey", fontSize: "25px"}}>Contact</Texty>
                </header>
                <div style = {{marginTop: "50px"}}>
                  <Texty >Game Desiner: Bingxin Gan</Texty> <Texty style={{marginLeft: "120px", marginTop: "25px" }}>Game Desiner: Xuan Zhu</Texty>
                </div>
                <div style = {{marginTop: "50px"}}>
                  <Texty >Game Desiner: Tianmu Lei</Texty> <Texty style={{marginLeft: "120px", marginTop: "25px" }}>Game Desiner: Ruoxi Jia</Texty>
                </div>
                <div style = {{marginTop: "50px"}}>
                  <Texty >Game Desiner: Ming Yang</Texty> <Texty style={{marginLeft: "120px", marginTop: "25px" }}>Game Desiner: Hengyi Yu</Texty>
                </div>
              </div>
            </div>
            
            <div className="entry-media" style = {{marginTop: "100px"}}>
            <NestedGrid   />
            </div>
            
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
