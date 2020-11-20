import React from 'react';
import Layout from '../layouts/index';
import pic1 from '../assets/1.jpg';
const AboutPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">About</h1>
                </header>

                <div className="entry-body">
                  <p>
                   GAME DESCRIPTION
                </p>
                  <p>
                  GAME DESCRIPTION
                </p>
                  <hr />
                  <p>GAME DESCRIPTION</p>
                  <hr />
                  <p>GAME DESCRIPTION</p>
                </div>
              </div>
            </div>
            <div className="entry-media">
              <img src={pic1} alt="" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
