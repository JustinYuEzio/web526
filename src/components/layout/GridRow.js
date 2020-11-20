import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Person from './Person';
import pic1 from '../../assets/1.jpg';
import pic2 from '../../assets/1.jpg';
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
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}  >
          <Paper className={classes.paper}><Person linkedin="123" name="beautiful girl" pic={pic1}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person linkedin="123" name="beautiful girl" pic={pic2}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person/></Paper>
        </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}  >
          <Paper className={classes.paper}><Person/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Person/></Paper>
        </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
