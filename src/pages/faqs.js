import React from 'react';
import Layout from '../layouts/index';
import Character from '../components/layout/Character';
import ant from '../assets/ant.jpg';
import mouse from '../assets/mouse.jpg';
import crockroach from '../assets/crockroach.jpg';
import bubblegum from '../assets/bubblegum.jpg';
import Grid from '@material-ui/core/Grid';
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';
const FaqsPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <Texty className="entry-title" style = {{fontSize: "40px"}}>Characters</Texty>
                </header>

                <div className="entry-body">
                <hr>
                  </hr>
                  <Texty type = "left">Bubble gum has the skills that a bubble gum should have, such as blowing bubbles, sticking to enemies, and so on. In addition, it also has some basic skills that game characters have, such as moving in different directions.</Texty>
                  <hr>
                  </hr>
                  <Texty duration='1500' type = "left" number = '4'>we also designed different types of enemies, such as ants and cockroaches. Different types of enemies have different aggressiveness and stickiness.
</Texty>
                </div>
              </div>
              
            </div>
            
            <Grid container spacing={10} style = {{backgroundColor: "Aquamarine", marginLeft: "50px", height: "489px", borderRadius: "25px"}}>
            <QueueAnim duration="1000" style ={{marginLeft: "50px"}}>
              <Grid item xs = {7} key = "demo1">
              <Character pic = {bubblegum} des = "BubbleGum"/>
              </Grid>
              <Grid item xs = {7} key = "demo2">
              <Character pic = {ant} des = "Ant"/>
              </Grid>
              <Grid item xs = {7} key = "demo3">
              <Character pic = {mouse} des = "Mouse"/>
              </Grid>
              <Grid item xs = {7} key = "demo4">
              <Character pic = {crockroach} des = "Cockroach"/>
              </Grid>
              </QueueAnim>
            </Grid>
            
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default FaqsPage;
