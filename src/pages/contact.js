import React from 'react';
import Layout from '../layouts/index';
import NestedGrid from '../components/layout/GridRow';
import Person from '../components/layout/Person';
import pic1 from '../assets/1.jpg';
import Grid from '@material-ui/core/Grid';
const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Contact</h1>
                </header>
                <NestedGrid/>
              </div>
            </div>
            
            <div className="entry-media">
            </div>
            
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
