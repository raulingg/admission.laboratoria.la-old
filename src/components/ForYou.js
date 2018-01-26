import React from 'react';
import { withStyles } from 'material-ui/styles';
import Hero from './Hero';


const styles = theme => ({
  p: {
    fontSize: 26,
    maxWidth: 690,
    margin: '0 auto',
  },
  h2: {
    marginBottom: theme.spacing.unit * 6,
  },
});


const ForYou = ({ classes }) => (
  <Hero backgroundImage="url('//c.fastcdn.co/u/cf943cfe/22290681-0-LAB17001-TF-HACKATHO.png')">
    <p className={classes.p}>
      ¿Te consideras una mujer con ganas de comerse el mundo pero que no ha
      tenido buenas oportunidades educativas o laborales?
    </p>
    <h2 className={classes.h2}>Entonces Laboratoria es para tí</h2>
    <a href="#form" className="button">Postula ahora</a>
  </Hero>
);


export default withStyles(styles)(ForYou);
