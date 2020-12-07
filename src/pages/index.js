import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="STICKIN'"
        content="2D adventure game. 
        Move, stick, attack and reach the reach the ultimate goal!"
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
