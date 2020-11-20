import React from 'react';
import Layout from '../layouts/index';
const SupportPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header>Contact us if you have questions</header>
                <p></p>
              <div className="control control-expanded">
                <input className="input" type="email" name="email" placeholder="Your best email&hellip;" />
              </div>
              <p></p>
              <div className="control">
                <button className="button button-primary button-block button-shadow" type="submit"> SUBMIT </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default SupportPage;
