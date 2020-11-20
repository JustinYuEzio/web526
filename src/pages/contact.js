import React from 'react';
import Layout from '../layouts/index';
import NestedGrid from '../components/layout/GridRow';
const ContactPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <NestedGrid />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ContactPage;
