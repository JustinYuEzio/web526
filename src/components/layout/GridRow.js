import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Person from './Person';
import Jia from '../../assets/Jia.jpg';
import Yu from '../../assets/Yu.jpg';
import Zhu from '../../assets/Zhu.jpg';
import Lei from '../../assets/Lei.png';
import Yang from '../../assets/Yang.jpg';
import Gan from '../../assets/Gan.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={10}>
        <Grid container item xs={12} spacing={5}>
        <Grid item xs={4}  >
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/bingxin-gan/" name="Bingxin Gan" pic={Gan}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/xuan-winnie-zhu/" name="Xuan Zhu" pic={Zhu}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/hengyiyu-usc/" name="Hengyi Yu" pic={Yu}/></Paper>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={8}>
        <Grid item xs={4}  >
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/ruoxi-jia/" name="Ruoxi Jia" pic={Jia}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/tianmu-lei-208449170/" name="Tianmu Lei" pic={Lei}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person linkedin="https://www.linkedin.com/in/ming-yang-1b7131163/" name="Ming Yang" pic={Yang}/></Paper>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
